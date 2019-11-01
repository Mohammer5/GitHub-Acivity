import { combineEpics } from 'redux-observable';

import { fetchActivityData } from './epics/fetchActivityData';
import { storeState } from './epics/storeState';

export const rootEpic = combineEpics(
  fetchActivityData,
  storeState,
)
