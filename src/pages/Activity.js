import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import React from 'react'
import cx from 'classnames'

import { ActivityEvent } from '../components/ActivityEvent';
import { H1 } from '../components/H1';
import { Toggles } from '../components/Toggles';
import { Toggle } from '../components/Toggle';
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
    <Toggles>
      {data.map(({ day, activities }) => (
        <Toggle key={day} headline={day}>
          {activities.map(
            activity => (
              <ActivityEvent
                key={activity.id + activity.created_at}
                activity={activity}
              />
            )
          )}
        </Toggle>
      ))}
    </Toggles>
  </div>
)

export const Activity = ({
  loadingData,
  loadingError,
  data,
  hasData,
}) => {
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

export const ConnectedActivity = connect(
  state => ({
    loadingData: getActivityDataLoading(state),
    loadingError: getActivityDataError(state),
    data: getActivityDataByDay(state),
    hasData: getHasActivityData(state),
  }),
  dispatch => ({})
)(Activity)
