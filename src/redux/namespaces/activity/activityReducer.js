import {
  LOAD_ACTIVITY_DATA,
  LOADING_ACTIVITY_DATA_ERROR,
  SET_ACTIVITY_DATA,
} from './actions';

export const defaultState = {
  pageCount: 1,
  loadingData: false,
  loadingError: '',
  data: [],
}

export const activityReducer = (state = defaultState, action) => {
  const { type, payload } = action

  if (type === LOAD_ACTIVITY_DATA) {
    return {
      ...state,
      loadingData: true,
      loadingError: '',
      pageCount: payload.pageCount,
    }
  }

  if (type === LOADING_ACTIVITY_DATA_ERROR) {
    return { ...state, loadingData: false, loadingError: payload }
  }

  if (type === SET_ACTIVITY_DATA) {
    return { ...state, data: payload, loadingData: false }
  }

  return state;
}
