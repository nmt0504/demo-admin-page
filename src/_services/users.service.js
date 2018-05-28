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
  return axios.post(config.API_SERVER + '/auth/login', {
    phone: user.username,
    password: user.password
  })
    .then(handleResponse)
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
  if (resp.code == 200) {
    return resp;
  }
  return Promise.reject(resp.message);
}

export const userService = {
  login,
  logout,
  register,
  changePassword
};
