import * as APIUtil from "../util/api_util";

export const REQUEST_ALL_INTERESTS = "REQUEST_ALL_INTERESTS";
export const REQUEST_FINDABLE_GROUPS = "REQUEST_FINDABLE_GROUPS";
export const REQUEST_GROUP = "REQUEST_GROUP";
export const REQUEST_FINDABLE_EVENTS = "REQUEST_FINDABLE_EVENTS";
export const REQUEST_EVENT = "REQUEST_EVENT";

const requestFindableGroups = (groups) => {
  return {
    type: REQUEST_FINDABLE_GROUPS,
    groups
  };
};

const requestGroup = (group) => {
  return {
    type: REQUEST_GROUP,
    group
  };
};

const requestAllInterests = (interests) => {
  return {
    type: REQUEST_ALL_INTERESTS,
    interests
  };
};

export const fetchFindableGroups = (filters) => {
  return (dispatch) => {
    return APIUtil.fetchFindableGroups(filters).then((response)=>{
      return dispatch(requestFindableGroups(response));
    });
  };
};
export const fetchGroup = (id) => {
  return (dispatch) => {
    return APIUtil.fetchGroup(id).then((response)=>{
      return dispatch(requestGroup(response));
    });
  };
};

export const fetchInterests = () => {
  return (dispatch) => {
    return APIUtil.fetchInterests().then((response) => {
      return dispatch(requestAllInterests(response));
    });
  };
};
