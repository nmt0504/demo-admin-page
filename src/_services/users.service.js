// import { authHeader } from '../_helpers';
import axios from 'axios';
let config = require('../config.json');

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(user) {
  return axios.post(config.API_SERVER + '/users/register', {
    phone: user.phone
  })
    .then(handleResponse)
}

function login(user) {
  const params = {
	  username: user.username,
	  password: user.password
  };
  return axios({
	  method: 'post',
	  url: config.API_SERVER + '/auth/login',
	  data: params,
	  contentType: 'application/json',
  })
    .then(resp => resp.data)
	  .catch(error => {
	  	return Promise.reject(error.response.data);
	  })
}

function changePassword(user, newPassword, confirmPassword) {
  return axios.put(`${config.API_SERVER}/users/${user._id}`, {
    token: user.token,
    newPassword: newPassword,
    confirmedPassword: confirmPassword
  })
    .then(handleResponse)
}

function handleResponse(resp) {
  if (resp.status === 200) {
    return resp.data.data;
  }
  return Promise.reject(resp.message);
}

export const userService = {
  login,
  logout,
  register,
  changePassword
};
