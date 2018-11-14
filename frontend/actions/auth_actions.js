import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const logoutCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then(
      (res) => dispatch(receiveCurrentUser(res)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then(
      (res) => dispatch(logoutCurrentUser(res)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then(
      (res) => dispatch(receiveCurrentUser(res)),
      (err) => dispatch(receiveErrors(err))
    );
  };
};
