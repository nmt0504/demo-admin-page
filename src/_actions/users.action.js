import { userConstants } from "../_constants";
import { userService } from '../_services';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom';
// import { alertActions } from './';

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
    dispatch(request());
    return userService.login(user)
      .then(resp => {
        const data = {
          user: user,
          response: resp,
        };
        if(resp.code === 200) {
          dispatch(success(data));
          if (resp && resp.data) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(resp.data.token));
          }
        } else {
	        dispatch(failure());
        }
	      return data;
      })
      .catch(error => {
	      dispatch(failure(error));
	      return Promise.reject(error);
      });
  };

  function request() { return { type: userConstants.LOGIN_REQUEST } }
  function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
  function failure() { return { type: userConstants.LOGIN_FAILURE } }
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
