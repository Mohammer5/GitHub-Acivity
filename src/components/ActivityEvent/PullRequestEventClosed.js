import React from 'react';

import { EventWrapper } from './EventWrapper';
import { Link } from '../Link';
import activityStyles from './activityStyles.module.css'

export const PullRequestEventClosed = ({ activity }) => {
  const { payload } = activity
  const { pull_request: pullRequest } = payload
  const prUrl = pullRequest.html_url

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

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>PR Link</span>
        <Link href={prUrl} />
      </div>
    </EventWrapper>
  )
}
