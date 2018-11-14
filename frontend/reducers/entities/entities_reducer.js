import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import interestsReducer from './interests_reducer';

const entitiesReducer = combineReducers( {
  users: usersReducer,
  interests: interestsReducer
});

export default entitiesReducer;
