import React from 'react';

import { EventWrapper } from './EventWrapper';
import { Link } from '../Link';
import activityStyles from './activityStyles.module.css'

export const IssueCommentEvent = ({ activity }) => {
  const { payload } = activity
  const { issue, comment } = payload

  return (
    <EventWrapper activity={activity} title="Commented issue">
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Number</span>
        #{issue.number}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Author</span>
        {issue.user.login}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Title</span>
        {issue.title}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Url</span>
        <Link href={comment.html_url} />
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Body</span>
        <code>
          <pre className={activityStyles.comment}>
            {comment.body}
          </pre>
        </code>
      </div>
    </EventWrapper>
  )
}
