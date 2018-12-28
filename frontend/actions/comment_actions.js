import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComment = (comment) => {
  debugger
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const createComment = (comment) => {
  return (dispatch) => {
    return CommentAPIUtil.createComment(comment).then((response)=>{
      return dispatch(receiveComment(response));
    });
  };
};
