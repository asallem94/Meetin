import * as APIUtil from "../util/api_util"

export const REQUEST_ALL_INTERESTS = "REQUEST_ALL_INTERESTS";
export const REQUEST_FINDABLE_GROUPS = "REQUEST_FINDABLE_GROUPS";
export const REQUEST_FINDABLE_EVENTS = "REQUEST_FINDABLE_EVENTS";

export const requestFindableGroups = (groups) => {
  return {
    type: REQUEST_FINDABLE_GROUPS,
    groups
  }
}

export const requestAllInterests = (groups) => {
  return {
    type: REQUEST_ALL_INTERESTS,
    groups
  }
}

export const fetchFindableGroups = (filters) => {
  return (dispatch) => {
    return APIUtil.fetchFindableGroups().then((response)=>{
      return dispatch(requestFindableGroups(response))
    })
  }
}

export const fetchInterests = (filters) => {
  return (dispatch) => {
    return APIUtil.fetchInterests(filters).then((response)=>{
      return dispatch(requestAllInterests(response))
    })
  }
}
