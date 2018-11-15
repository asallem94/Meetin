import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import interestsReducer from './interests_reducer';
import groupsReducer from './groups_reducer';

const entitiesReducer = combineReducers( {
  users: usersReducer,
  interests: interestsReducer,
  groups: groupsReducer
});

export default entitiesReducer;
