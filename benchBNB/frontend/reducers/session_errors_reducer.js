import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _emptyState = {
  session: []
};

export const sessionErrorsReducer = (state = _emptyState, action) => {
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, {session: action.errors});
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, _emptyState);
    default:
      return state;
  }
};