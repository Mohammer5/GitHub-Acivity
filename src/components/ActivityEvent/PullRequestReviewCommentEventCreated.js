import React from 'react';

import { EventWrapper } from './EventWrapper';
import { Link } from '../Link';
import activityStyles from './activityStyles.module.css'

export const PullRequestReviewCommentEventCreated = ({ activity }) => {
  const { payload } = activity
  const { pull_request: pullRequest, comment } = payload
  const prUrl = pullRequest.html_url
  const commentUrl = comment.html_url

  return (
    <EventWrapper activity={activity} title={`Commented on PR #${pullRequest.number}`}>
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Author</span>
        {pullRequest.user.login}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Branch</span>
        {`${pullRequest.base.label} < ${pullRequest.head.label} `}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>PR Title</span>
        {pullRequest.title}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Comment by</span>
        {pullRequest.user.login}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Comment</span>
        <code>
          <pre className={activityStyles.comment}>
            {comment.body}
          </pre>
        </code>
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Comment Link</span>
        <Link href={commentUrl} />
      </div>
    </EventWrapper>
  )
}
