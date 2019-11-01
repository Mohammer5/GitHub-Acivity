import React from 'react';
import activityStyles from './activityStyles.module.css'
import { EventWrapper } from './EventWrapper';

export const IssuesEventOpened = ({ activity }) => {
  const { payload } = activity
  const { issue } = payload

  return (
    <EventWrapper activity={activity} title="New Issue">
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Number</span>
        #{issue.number}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Title</span>
        {issue.title}
      </div>
    </EventWrapper>
  )
}
