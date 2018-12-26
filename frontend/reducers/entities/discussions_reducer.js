import { RECEIVE_DISCUSSIONS, RECEIVE_DISCUSSION, RECIEVE_COMENTS } from '../../actions/discussion_actions';
import { RECEIVE_USER } from '../../actions/auth_actions';

import { merge } from 'lodash';

const discussionsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DISCUSSIONS:
      return merge({}, state, action.discussions);
    case RECEIVE_DISCUSSION:
      return merge({}, state, action.discussion);
    default:
      return state;
  }
};

export default discussionsReducer;
