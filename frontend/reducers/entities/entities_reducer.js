import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import interestsReducer from './interests_reducer';
import groupsReducer from './groups_reducer';
import eventsReducer from './events_reducer';
import chatsReducer from './chats_reducer';
import messagesReducer from './messages_reducer';
import discussionsReducer from './discussions_reducer';

const entitiesReducer = combineReducers( {
  users: usersReducer,
  interests: interestsReducer,
  groups: groupsReducer,
  events: eventsReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  discussions: discussionsReducer,
});

export default entitiesReducer;
