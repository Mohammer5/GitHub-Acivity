import { endOfWeek } from 'date-fns';

import { startOfWeek } from 'date-fns';

import { createSelector } from 'reselect';
import { format, getWeek } from 'date-fns';
import { last, pipe, reverse } from 'lodash/fp';

const groupByWeek = activities => activities.reduce(
  (curWeeks, activity, index) => {
    const week = getWeek(new Date(activity.created_at))
    const latest = last(curWeeks)

    if (latest && latest[0].week === week) return [
      ...curWeeks.slice(0, curWeeks.length - 1),
      [ ...latest, { ...activity, week } ]
    ]

    return [ ...curWeeks, [{ ...activity, week }]]
  },
  [],
)

const wrapByWeek = groups => {
  const wrapped = groups.reduce(
    (curWrapped, activities) => {
      const activityDate = new Date(activities[0].created_at)
      const week = getWeek(activityDate)
      const weekStart = format(startOfWeek(activityDate), 'dd MMMM yyyy')
      const weekEnd = format(endOfWeek(activityDate), 'dd MMMM yyyy')
      const namespace = `week-${week}`

      if (!curWrapped[namespace]) {
        curWrapped[namespace] = []
      }

      return {
        ...curWrapped,
        [namespace]: [
          ...curWrapped[namespace],
          activities.map(activity => ({
            ...activity,
            week,
            weekStart,
            weekEnd,
          }))
        ]
      }
    },
    {}
  )

  return Object.values(wrapped)
}

const groupByDate = groups => {
  return groups.reduce(
    (curGrouped, activities) => {
      const curGroupsByDay = activities.reduce(
        (curDays, activity, index) => {
          const day = format(new Date(activity.created_at), 'dd MMMM yyyy')
          const latest = last(curDays)

          if (latest && latest[0].day === day) return [
            ...curDays.slice(0, curDays.length - 1),
            [ ...latest, { ...activity, day } ]
          ]

          return [ ...curDays, [{ ...activity, day }]]
        },
        [],
      )

      return [ ...curGrouped, ...curGroupsByDay ]
    },
    []
  )

}

const groupByRepository = groupedActivities => {
  return groupedActivities.reduce(
    (curGrouped, curGroup) => {
      const curGroupByRepository = curGroup.reduce(
        (curGroupedByRepository, activity) => {
          const repo = activity.repo.name

          if (typeof curGroupedByRepository[repo] === 'undefined') {
            curGroupedByRepository[repo] = []
          }

          return {
            ...curGroupedByRepository,
            [repo]: [ ...curGroupedByRepository[repo], activity ],
          }
        },
        {}
      )

      return [ ...curGrouped, ...Object.values(curGroupByRepository) ]
    },
    [],
  )
}

export const getActivityData = state =>
  state.activity.data

export const getActivityDataByDay = createSelector(
  getActivityData,
  pipe(
    reverse,
    // root group
    activities => [activities],
    groupByDate,
    groupByRepository,
    wrapByWeek,
  ),
)
