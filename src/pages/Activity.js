import { Redirect } from 'react-router-dom'
import { connect, useSelector } from 'react-redux';
import React from 'react'
import cx from 'classnames'

import { ActivityEvent } from '../components/ActivityEvent';
import { H1 } from '../components/H1';
import { Toggle } from '../components/Toggle';
import { ToggleHeadline } from '../components/ToggleHeadline';
import { Toggles } from '../components/Toggles';
import { getActivityDataByDay } from '../redux/selectors/getActivityData';
import { getActivityDataError } from '../redux/selectors/getActivityDataError';
import {
  getActivityDataLoading,
} from '../redux/selectors/getActivityDataLoading';
import { getHasActivityData } from '../redux/selectors/getHasActivityData';
import styles from './Activity.module.css'

const Loading = () => (
  <div>Loading the data...</div>
)

const Error = ({ message }) => (
  <div>
    An error while loading the data occurred:<br />
    {message}
  </div>
)

const Data = ({ data }) => (
  <div>
    {data.map(
      weekGroup => {
        const { week, weekStart, weekEnd } = weekGroup[0][0]

        return (
          <div key={week}>
            <h2>{`${weekStart} - ${weekEnd}`}</h2>
            <div>
              <Toggles>
                {weekGroup.map(activities => {
                  const { day, repo } = activities[0]
                  const headline = <ToggleHeadline day={day} repo={repo.name} />

                  return (
                    <Toggle key={`${day}-${repo.name}`} headline={headline}>
                      {activities.map(
                        activity => (
                          <ActivityEvent
                            key={activity.id + activity.created_at}
                            activity={activity}
                          />
                        )
                      )}
                    </Toggle>
                  )
                })}
              </Toggles>
            </div>
          </div>
        )
      }
    )}
  </div>
)

export const Activity = () => {
  const loadingData = useSelector(getActivityDataLoading);
  const loadingError = useSelector(getActivityDataError);
  const data = useSelector(getActivityDataByDay);
  const hasData = useSelector(getHasActivityData);

  return (
    <div className={cx(styles.page)}>
      <div className={styles.pageContent}>
        <H1>User activity</H1>

        {loadingData && <Loading />}
        {loadingError && <Error message={loadingError} />}
        {!loadingData && !loadingError && hasData && <Data data={data} />}
        {!loadingData && !loadingError && !hasData && <Redirect to="/" />}
      </div>
    </div>
  )
}
