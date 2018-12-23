import { RECEIVE_FINDABLE_EVENTS, RECEIVE_EVENT } from '../../actions/event_actions';
import { RECEIVE_GROUP } from '../../actions/meetin_actions';
import { RECEIVE_RSVP } from '../../actions/rsvp_actions';
import { RECEIVE_USER } from '../../actions/auth_actions';

import { merge, remove } from 'lodash';

const eventsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);
  switch(action.type){
    case RECEIVE_USER:
    
      return merge({}, state, action.events);
    case RECEIVE_FINDABLE_EVENTS:
      return action.events || {};
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
    case RECEIVE_GROUP:
      return merge({}, state, action.events);
    case RECEIVE_RSVP:
      if (action.rsvp.rsvp) {
        defaultState[action.rsvp.event_id].attendees_ids.push(action.rsvp.user_id);
      } else {
        _.remove(defaultState[action.rsvp.event_id].attendees_ids, (userId) => userId === action.rsvp.user_id);
      }
      merge(defaultState, action.events);
      return defaultState;
    default:
      return state;
  }
};

export default eventsReducer;
