import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import React from 'react';

import {
  getActivityDataLoading,
} from '../redux/selectors/getActivityDataLoading';
import { getHasActivityData } from '../redux/selectors/getHasActivityData';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const hasActivityData = useSelector(getHasActivityData)
  const activityDataLoading = useSelector(getActivityDataLoading)
  const showActivityLink = hasActivityData || activityDataLoading

  return (
    <nav className={styles.navigation}>
      <ul className={styles.linkList}>
        <li className={styles.linkItem}>
          <Link to="/" className={styles.link}>
            <span className={styles.linkText}>
              Home
            </span>
          </Link>
        </li>

        {showActivityLink && (
          <li className={styles.linkItem}>
            <Link to="/activity" className={styles.link}>
              <span className={styles.linkText}>
                User activity
              </span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
