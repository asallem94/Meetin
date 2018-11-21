import * as APIUtil from "../util/api_util";

export const RECEIVE_ALL_INTERESTS = "RECEIVE_ALL_INTERESTS";
export const RECEIVE_FINDABLE_GROUPS = "RECEIVE_FINDABLE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";



const receiveFindableGroups = (groups) => {
  return {
    type: RECEIVE_FINDABLE_GROUPS,
    groups
  };
};

const receiveGroup = ({group, users, events}) => {
  return {
    type: RECEIVE_GROUP,
    group,
    users,
    events
  };
};

const receiveAllInterests = (interests) => {
  return {
    type: RECEIVE_ALL_INTERESTS,
    interests
  };
};

export const fetchFindableGroups = (filters) => {
  return (dispatch) => {
    return APIUtil.fetchFindableGroups(filters).then((response)=>{
      return dispatch(receiveFindableGroups(response));
    });
  };
};

export const fetchGroup = (id) => {
  return (dispatch) => {
    return APIUtil.fetchGroup(id).then((response)=>{
      return dispatch(receiveGroup(response));
    });
  };
};

export const createGroup = (group) => {
  return (dispatch) => {
    return APIUtil.createGroup(group).then((response)=>{
      return dispatch(receiveGroup(response));
    });
  };
};

export const fetchInterests = () => {
  return (dispatch) => {
    return APIUtil.fetchInterests().then((response) => {
      return dispatch(receiveAllInterests(response));
    });
  };
};
