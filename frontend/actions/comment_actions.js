import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};
const receiveComments = ({comments}) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const createComment = (comment) => {
  return (dispatch) => {
    return CommentAPIUtil.createComment(comment).then((response)=>{
      return dispatch(receiveComment(response));
    });
  };
};
export const fetchComment = (id) => {
  return (dispatch) => {
    return CommentAPIUtil.fetchComment(id).then((response)=>{
      return dispatch(receiveComments(response));
    });
  };
};
