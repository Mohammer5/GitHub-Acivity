import React from 'react';
import styles from './Label.module.css';

export const Label = ({ name, children }) => (
  <label className={styles.label} htmlFor={name}>
    {children}
  </label>
)
