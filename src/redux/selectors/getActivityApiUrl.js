import { createSelector } from 'reselect';
import { getUserName } from './getUserName';

export const getActivityApiUrl = createSelector(
  getUserName,
  userName => `https://api.github.com/users/${userName}/events`,
)
