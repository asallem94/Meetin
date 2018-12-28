import * as DiscussionAPIUtil from '../util/discussion_api_util';

export const RECEIVE_DISCUSSIONS = "RECEIVE_DISCUSSIONS";
export const RECEIVE_DISCUSSION = "RECEIVE_DISCUSSION";
export const RECIEVE_COMMENT = "RECIEVE_COMMENT";

const receiveDiscussions = ({discussions, comments}) => {
  return {
    type: RECEIVE_DISCUSSIONS,
    discussions,
    comments
  };
};

const receiveDiscussion = ({discussion, comments}) => {
  return {
    type: RECEIVE_DISCUSSION,
    discussion,
    comments,
  };
};


export const fetchDiscussions = (groupId) => {
  return (dispatch) => {
    return DiscussionAPIUtil.fetchDiscussions(groupId).then((response)=>{
      return dispatch(receiveDiscussions(response));
    });
  };
};

export const fetchDiscussion = (id, offset) => {
  return (dispatch) => {
    return DiscussionAPIUtil.fetchDiscussion(id, offset).then((response)=>{
      return dispatch(receiveDiscussion(response));
    });
  };
};

export const createDiscussion = (discussion) => {
  return (dispatch) => {
    return DiscussionAPIUtil.createDiscussion(discussion).then((response)=>{
      return dispatch(receiveDiscussion(response));
    });
  };
};

export const createComment = (comment) => {
  return (dispatch) => {
    return DiscussionAPIUtil.createDiscussion(comment).then((response)=>{
      return dispatch(recieveComment(response));
    });
  };
};
