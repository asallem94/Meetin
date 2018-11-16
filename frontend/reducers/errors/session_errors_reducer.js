import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../../actions/auth_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      debugger
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
