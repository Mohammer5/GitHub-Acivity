import React from 'react'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import activityStyles from './activityStyles.module.css'

export const EventWrapper = ({
  title,
  activity,
  children,
}) => {
  const date = parseISO(activity.created_at)

  return (
    <div className={activityStyles.container}>
      <h2 className={activityStyles.headline}>{title}</h2>

      <div className={activityStyles.eventData}>
        <table className={activityStyles.timeTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{format(date, 'do MMMM yyyy')}</td>
              <td>{format(date, 'HH:mm aaaa')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={activityStyles.eventData}>
        <span className={activityStyles.eventHeadline}>Repo</span>
        {activity.repo.name}
      </div>

      {children}
    </div>
  )
}
