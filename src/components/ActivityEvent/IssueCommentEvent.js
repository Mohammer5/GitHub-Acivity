import React from 'react';
import activityStyles from './activityStyles.module.css'
import { EventWrapper } from './EventWrapper';

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
        <span className={activityStyles.eventHeadline}>Title</span>
        {issue.title}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Url</span>

        <a
          href={comment.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {comment.html_url}
        </a>
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
