import * as types from './actionTypes';

export function login(token) {
  return { type: types.LOGIN, token };
}

export function logout() {
  return { type: types.LOGOUT, token: '' };
}
