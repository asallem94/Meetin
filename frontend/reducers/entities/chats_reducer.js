import { RECEIVE_ALL_CHATS, RECEIVE_CHAT, RECIEVE_MESSAGE } from '../../actions/messaging_actions';
import { merge, remove } from 'lodash';

const chatsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_CHATS:
      return merge({}, state, action.chats);
    case RECEIVE_CHAT:
      return merge({}, state, action.chats);
    case RECIEVE_MESSAGE:
      defaultState[action.message.chat_id].messages_ids.push(action.message.id);
      return defaultState;
    default:
      return state;
  }
};

export default chatsReducer;
