import { combineEpics } from 'redux-observable';

import { fetchActivityData } from './epics/fetchActivityData';

export const rootEpic = combineEpics(
  fetchActivityData,
)
