import React from 'react';
import activityStyles from './activityStyles.module.css'
import { EventWrapper } from './EventWrapper';

export const MemberEventAdded = ({ activity }) => {
  const { payload, repo } = activity
  const { member } = payload

  return (
    <EventWrapper activity={activity} title="Added member to repo">
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Member</span>
        {member.login}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Repository</span>
        {repo.name}
      </div>
    </EventWrapper>
  )
}
