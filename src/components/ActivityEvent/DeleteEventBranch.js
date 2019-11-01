import React from 'react';
import activityStyles from './activityStyles.module.css'
import { EventWrapper } from './EventWrapper';

export const DeleteEventBranch = ({ activity }) => {
  const { payload } = activity
  const { ref } = payload

  return (
    <EventWrapper activity={activity} title="Deleted branch">
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Name</span>
        {ref}
      </div>
    </EventWrapper>
  )
}
