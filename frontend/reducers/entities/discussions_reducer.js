import { RECEIVE_DISCUSSIONS, RECEIVE_DISCUSSION, RECIEVE_COMMENTS } from '../../actions/discussion_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
import { RECEIVE_USER } from '../../actions/auth_actions';

import { merge } from 'lodash';

const discussionsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);
  switch(action.type){
    case RECEIVE_DISCUSSIONS:
      return merge({}, state, action.discussions);
    case RECEIVE_DISCUSSION:
      return merge({}, state, action.discussions);
    case RECEIVE_COMMENT:
      if (action.comment.commentable_type === "Discussion"){
        defaultState[action.comment.commentable_id].commentIds.push(action.comment.id);
      }
      debugger
      return merge({}, state, defaultState);
    default:
      return state;
  }
};

export default discussionsReducer;
