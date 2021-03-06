import { userConstants } from '../_constants';

let token = JSON.parse(localStorage.getItem('token'));
let username = localStorage.getItem('username');
const initialState = {
	username: username ? username : null,
  token: token ? token : null,
	loggingIn: false,
	loggingOut: false,
	loginErrors: null
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
	    return Object.assign({}, initialState, {loggingIn: true});
    case userConstants.LOGIN_SUCCESS:
	    return Object.assign({}, state, {username: username, loggingIn: false, loginErrors: null});
    case userConstants.LOGIN_FAILURE:
	    return {
		    ...state,
		    loggingIn: false,
		    user: null,
		    // loginErrors: action.payload.response.data.message
	    };
    case userConstants.LOGOUT:
	    return {
		    ...state,
		    loggingOut: false,
		    user: null,
		    loginErrors: null
	    };
    default:
      return state
  }
}
