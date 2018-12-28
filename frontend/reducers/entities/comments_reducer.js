import { RECEIVE_DISCUSSION, RECIEVE_COMMENTS } from '../../actions/discussion_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
import { RECEIVE_USER } from '../../actions/auth_actions';

import { merge } from 'lodash';

const commentsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DISCUSSION:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    default:
      return state;
  }
};

export default commentsReducer;
