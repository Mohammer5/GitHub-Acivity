import { LOAD_ACTIVITY_DATA } from '../activity/actions'

/**
 * Reducer
 * =======
 */
export const defaultState = {
  name: '',
}

export const userReducer = (state = defaultState, action) => {
  const { type, payload } = action

  if (type === LOAD_ACTIVITY_DATA) {
    return { ...state, name: payload.name }
  }

  return state
}
