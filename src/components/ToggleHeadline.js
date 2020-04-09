import React from 'react'
import styles from './ToggleHeadline.module.css'

export const ToggleHeadline = ({ day, repo }) => (
  <span>
    <span className={styles.day}>{day}</span>
    <span className={styles.repoName}>{repo}</span>
  </span>
)
