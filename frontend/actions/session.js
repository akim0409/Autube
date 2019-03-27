import { login, logout, signUp } from "../util/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch =>
  signUp(formUser).then(user => dispatch(receiveCurrentUser(user)));

export const loginUser = formUser => dispatch =>
  login(formUser).then(user => dispatch(receiveCurrentUser(user)));

export const logoutUser = () => dispatch =>
  logout().then(() => dispatch(logoutCurrentUser()));
