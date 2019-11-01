import React, { useMemo } from 'react';
import activityStyles from './activityStyles.module.css'
import { EventWrapper } from './EventWrapper';

export const PushEvent = ({ activity }) => {
  const { payload } = activity
  const { ref, commits } = payload
  const branch = useMemo(() => ref.replace('refs/heads/', ''), [ ref ])
  const messages = useMemo(
    () => commits.map(({ message }) => message.split('\n')[0]),
    [ commits ]
  )

  return (
    <EventWrapper title="Push event" activity={activity}>
      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Branch</span>
        {branch}
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Commit messages:</span>

        <ul className={activityStyles.list}>
          {messages.map((message, index) => (
            <li
              key={message + index}
              className={activityStyles.listItem}
            >
              {message}
            </li>
          ))}
        </ul>
      </div>
    </EventWrapper>
  )
}
