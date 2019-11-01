import { combineReducers } from 'redux';

import { activityReducer } from './namespaces/activity/activityReducer';
import { userReducer } from './namespaces/user/userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  activity: activityReducer,
})
