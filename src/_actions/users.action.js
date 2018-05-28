import { userConstants } from "../_constants";
import { userService } from '../_services';
// import { alertActions } from './';
import { history } from '../_helpers';

function register(user) {
  return dispatch => {
    dispatch(request(user));
    userService.register(user)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function login(user) {
  return dispatch => {
    dispatch(request(user));
    userService.login(user)
      .then(
        user => {
          dispatch(success(user));
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
          }
          return user;
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function changePassword(user, newPassword, confirmPassword) {
  return dispatch => {
    dispatch(request(user));
    userService.changePassword(user, newPassword, confirmPassword)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: userConstants.EDIT_PASSWORD_REQUEST, user } }
  function success(user) { return { type: userConstants.EDIT_PASSWORD_SUCCESS, user } }
  function failure(error) { return { type: userConstants.EDIT_PASSWORD_FAILURE, error } }
}

//login,
//logout,
export const userActions = {
  register,
  login,
  changePassword
};
