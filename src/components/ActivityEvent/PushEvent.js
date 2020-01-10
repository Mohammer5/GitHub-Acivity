import React, { useMemo } from 'react';

import { EventWrapper } from './EventWrapper';
import { Link } from '../Link';
import activityStyles from './activityStyles.module.css'

export const PushEvent = ({ activity }) => {
  const { payload, repo } = activity
  const { ref, commits } = payload
  const branch = useMemo(() => ref.replace('refs/heads/', ''), [ ref ])
  const messages = useMemo(
    () => commits.map(({ message }) => message.split('\n')[0]),
    [ commits ]
  )

  const beforeUrl = `https://github.com/${activity.repo.name}/commit/${payload.before}`
  const commitUrl = `https://github.com/${activity.repo.name}/commit/${payload.head}`

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

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Commit Link</span>

        From:<br />
        <Link href={beforeUrl} /><br />
        <br />
        To:<br />
        <Link href={commitUrl} />
      </div>
    </EventWrapper>
  )
}
