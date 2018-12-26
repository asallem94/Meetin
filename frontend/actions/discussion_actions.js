import * as DiscussionAPIUtil from '../util/discussion_api_util';

export const RECEIVE_DISCUSSIONS = "RECEIVE_DISCUSSIONS";
export const RECEIVE_DISCUSSION = "RECEIVE_DISCUSSION";
export const RECIEVE_COMENT = "RECIEVE_COMENT";

const receiveDiscussions = ({discussions, comments}) => {
  return {
    type: RECEIVE_DISCUSSIONS,
    discussions,
    comments
  };
};

const receiveDiscussion = ({discussions, comments, users}) => {
  return {
    type: RECEIVE_DISCUSSION,
    discussions,
    comments,
  };
};

const recieveDiscussion = ({comment, discussions}) => {
  return {
    type: RECIEVE_COMENT,
    comment
  };
};


export const fetchDiscussions = (groupId) => {
  return (dispatch) => {
    return DiscussionAPIUtil.fetchDiscussions(groupId).then((response)=>{
      return dispatch(receiveDiscussions(response));
    });
  };
};

export const fetchDiscussion = (id) => {
  return (dispatch) => {
    return DiscussionAPIUtil.fetchDiscussion(id).then((response)=>{
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
