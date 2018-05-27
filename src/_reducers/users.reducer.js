import { userConstants } from '../_constants';

// let user = JSON.parse(localStorage.getItem('user'));

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.EDIT_PASSWORD_REQUEST:
      return {
        editingPassword: true
      };
    case userConstants.EDIT_PASSWORD_SUCCESS:
      return {
        editPasswordSuccess: true
      };
    case userConstants.EDIT_PASSWORD_FAILURE:
      return {
        editPasswordSuccess: false,
        error_message: action.error
      };
    default:
      return state
  }
}
