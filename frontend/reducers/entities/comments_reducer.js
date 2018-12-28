import { RECEIVE_DISCUSSION, RECIEVE_COMMENTS } from '../../actions/discussion_actions';
import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../../actions/comment_actions';
import { RECEIVE_USER } from '../../actions/auth_actions';

import { merge } from 'lodash';

const commentsReducer = ( state = {}, action ) => {
  let defaultState = merge({}, state);
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DISCUSSION:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      if (action.comment.commentable_type === "Comment"){
        defaultState[action.comment.commentable_id].commentIds.push(action.comment.id);
      }
      const ds = merge({}, state, defaultState);
      return merge({}, ds, {[action.comment.id]: action.comment});
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);
    default:
      return state;
  }
};

export default commentsReducer;
