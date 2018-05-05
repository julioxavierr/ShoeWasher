import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

// Token empty means that user is logged out
const initialState = Immutable({
  token: '',
});

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return state.set('token', action.token);
    case types.LOGOUT:
      return state.set('token', action.token);
    default:
      return state;
  }
}
