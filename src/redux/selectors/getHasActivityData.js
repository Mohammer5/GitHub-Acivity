import { createSelector } from 'reselect'
import { getActivityData } from './getActivityData';

export const getHasActivityData = createSelector(
  getActivityData,
  data => data.length > 0,
)
