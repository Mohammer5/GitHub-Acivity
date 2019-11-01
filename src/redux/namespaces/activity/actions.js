export const LOAD_ACTIVITY_DATA = 'LOAD_ACTIVITY_DATA'
export const LOADING_ACTIVITY_DATA_ERROR = 'LOADING_ACTIVITY_DATA_ERROR'
export const SET_ACTIVITY_DATA = 'SET_ACTIVITY_DATA'

export const loadActivityData = (name, pageCount) => ({
  type: LOAD_ACTIVITY_DATA,
  payload: { name, pageCount },
})

export const loadingActivityDataError = message => ({
  type: LOADING_ACTIVITY_DATA_ERROR,
  payload: message,
})

export const setActivityData = data => ({
  type: SET_ACTIVITY_DATA,
  payload: data,
})
