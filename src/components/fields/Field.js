import React from 'react'
import cx from 'classnames'
import styles from './Field.module.css'

export const Field = ({ className, children }) => (
  <div className={cx(styles.field, className)}>
    {children}
  </div>
)
