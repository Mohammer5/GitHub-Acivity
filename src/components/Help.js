import React from 'react';
import cx from 'classnames'
import styles from './Help.module.css';

export const Help = ({ error, children }) => (
  <span className={cx(styles.help, { [styles.error]: error })}>
    {children}
  </span>
)
