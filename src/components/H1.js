import React from 'react'
import styles from './H1.module.css'

export const H1 = ({ children }) => (
  <h1 className={styles.headline}>{children}</h1>
)
