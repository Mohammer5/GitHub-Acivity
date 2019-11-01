import React from 'react';
import activityStyles from './activityStyles.module.css'
import { EventWrapper } from './EventWrapper';

export const PullRequestReviewCommentEventCreated = ({ activity }) => {
  const { payload } = activity
  const { pull_request: pullRequest } = payload

  return (
    <EventWrapper activity={activity} title="Commented on PR">
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>PR Title</span>
        {pullRequest.title}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Comment by</span>
        {pullRequest.user.login}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>PR Link</span>
        <a href={pullRequest.url}>
          ${pullRequest.url}
        </a>
      </div>
    </EventWrapper>
  )
}
