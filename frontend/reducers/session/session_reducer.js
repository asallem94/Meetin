import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_ERRORS } from '../../actions/auth_actions';

const sessionReducer = ( state = {}, action ) => {
  Object.freeze(state);
  const defaultState = { currentUserId: null };

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {currentUserId: action.user.id};
    case REMOVE_CURRENT_USER:
      return defaultState;
    // case RECEIVE_ERRORS:
    //   return action.errors;
    default:
      return state;
  }
};

export default sessionReducer;
