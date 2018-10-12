import { isNonEmptyString } from 'ramda-adjunct'

import { initialState, USER_REGISTERED } from '../constants'

export default function rootReducer(
  state = initialState,
  { type, payload = {} }
) {
  switch (type) {
    case USER_REGISTERED:
      return payload.user && isNonEmptyString(payload.user)
        ? {
            ...state,
            users: [...state.users, payload.user]
          }
        : state
    default:
      return state
  }
  return state
}
