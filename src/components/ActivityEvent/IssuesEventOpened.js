import React from 'react';

import { EventWrapper } from './EventWrapper';
import { Link } from '../Link';
import activityStyles from './activityStyles.module.css'

export const IssuesEventOpened = ({ activity }) => {
  const { payload } = activity
  const { issue } = payload
  const issueUrl = issue.html_url

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

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Issue link</span>
        <Link href={issueUrl} />
      </div>
    </EventWrapper>
  )
}
