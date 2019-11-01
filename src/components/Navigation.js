import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import {
  getActivityDataLoading,
} from '../redux/selectors/getActivityDataLoading';
import { getHasActivityData } from '../redux/selectors/getHasActivityData';
import styles from './Navigation.module.css';

export const Navigation = ({ showActivityLink }) => (
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

export const ConnectedNavigation = connect(
  state => ({
    showActivityLink: (
      getHasActivityData(state)
      || getActivityDataLoading(state)
    ),
  })
)(Navigation)
