import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../../actions/auth_actions';
import { RECEIVE_GROUP  } from '../../actions/meetin_actions';
import { merge } from 'lodash';

const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      defaultState[action.user.id] = action.user;
      return defaultState;
    case RECEIVE_GROUP:
      return merge({}, state, action.user);
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default usersReducer;
