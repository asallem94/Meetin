import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../../actions/auth_actions';
import { RECEIVE_GROUP } from '../../actions/meetin_actions';
import { RECEIVE_EVENT } from '../../actions/event_actions';
import { RECEIVE_RSVP } from '../../actions/rsvp_actions';
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../../actions/membership_actions';
import { RECEIVE_CHAT, RECIEVE_USERS } from '../../actions/messaging_actions';
import { merge } from 'lodash';


const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      defaultState[action.user.id] = action.user;
      return defaultState;
    case RECEIVE_GROUP:
      return merge({}, state, action.users);
    case RECEIVE_EVENT:
      return merge({}, state, action.users);
    case RECEIVE_MEMBERSHIP:
      merge(defaultState[action.membership.user_id], {groups:{[action.membership.group_id]: action.membership.id}});
      return defaultState;
    case REMOVE_MEMBERSHIP:
      delete defaultState[action.membership.user_id].groups[action.membership.group_id];
      return defaultState;
    case RECEIVE_RSVP:

      merge(defaultState[action.rsvp.user_id].events, {[action.rsvp.event_id]: {going: action.rsvp.rsvp, rsvpId: action.rsvp.id}});
      return defaultState;
    case RECEIVE_CHAT:
      return merge({}, state, action.users);
    case RECIEVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default usersReducer;
