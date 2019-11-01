import React from 'react';
import activityStyles from './activityStyles.module.css'
import { EventWrapper } from './EventWrapper';

export const PullRequestEventOpened = ({ activity }) => {
  const { payload } = activity
  const { pull_request: pullRequest } = payload

  return (
    <EventWrapper activity={activity} title="Opened PR">
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Number</span>
        #{pullRequest.number}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Title</span>
        {pullRequest.title}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Base branch</span>
        {pullRequest.base.label}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Head branch</span>
        {pullRequest.head.label}
      </div>
    </EventWrapper>
  )
}
