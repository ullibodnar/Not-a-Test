import { USER_REGISTERED } from '../constants'

export function userRegistered(user) {
  return {
    type: USER_REGISTERED,
    payload: {
      user
    }
  }
}
