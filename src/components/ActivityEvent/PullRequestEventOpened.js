import React from 'react';

import { EventWrapper } from './EventWrapper';
import { Link } from '../Link';
import activityStyles from './activityStyles.module.css'

export const PullRequestEventOpened = ({ activity }) => {
  const { payload } = activity
  const { pull_request: pullRequest } = payload
  const prUrl = pullRequest.html_url

  return (
    <EventWrapper activity={activity} title="Opened PR">
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Number</span>
        #{pullRequest.number}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Branch</span>
        {`${pullRequest.head.label} > ${pullRequest.base.label}`}
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

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>PR Link</span>
        <Link href={prUrl} />
      </div>
    </EventWrapper>
  )
}
