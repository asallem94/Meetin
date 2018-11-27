import { RECEIVE_CHAT, RECIEVE_MESSAGE } from '../../actions/messaging_actions';
import { merge, remove } from 'lodash';

const chatsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);
  switch(action.type){
    case RECIEVE_MESSAGE:
      return merge({}, state, {[action.message.id]: action.message});
    case RECEIVE_CHAT:
      return merge({}, state, action.messages);
    default:
      return state;
  }
};

export default chatsReducer;
