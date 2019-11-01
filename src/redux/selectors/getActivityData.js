import format from 'date-fns/format'
import { last, reverse } from 'lodash/fp';
import { createSelector } from 'reselect';

export const getActivityData = state =>
  state.activity.data

export const getActivityDataByDay = createSelector(
  getActivityData,
  data => {
    // from oldest to newest
    const activities = reverse(data)
    const days = activities.reduce(
      (curDays, activity, index) => {
        const date = new Date(activity.created_at)
        const day = format(date, 'dd MMMM yy')

        if (index === 0) {
          return [{ day, activities: [ activity ] }]
        }

        const latest = last(curDays)

        if (latest.day === day) {
          return [
            ...curDays.slice(0, curDays.length - 1),
            { ...latest, activities: [ ...latest.activities, activity ] }
          ]
        }

        return [ ...curDays, { day, activities: [ activity ] }]
      },
      [],
    )
    
    return days
  }
)
