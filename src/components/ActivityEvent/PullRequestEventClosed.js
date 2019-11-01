import React from 'react';
import activityStyles from './activityStyles.module.css'
import { EventWrapper } from './EventWrapper';

export const PullRequestEventClosed = ({ activity }) => {
  const { payload } = activity
  const { pull_request: pullRequest } = payload

  return (
    <EventWrapper activity={activity} title="Closed PR">
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Number</span>
        #{pullRequest.number}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Title</span>
        {pullRequest.title}
      </div>
    </EventWrapper>
  )
}
