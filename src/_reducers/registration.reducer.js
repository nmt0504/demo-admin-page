import { userConstants } from '../_constants';


export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return { registerSuccess: true, user: action.user  };
    case userConstants.REGISTER_FAILURE:
      return { registerSuccess: false, error_message: action.error };
    default:
      return state;
  }
}
