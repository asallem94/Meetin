import * as MembershipAPIUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";

const receiveMembership = ({membership, groups}) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership,
    groups
  };
};

const removeMembership = ({membership, groups}) => {
  return {
    type: REMOVE_MEMBERSHIP,
    membership,
    groups
  };
};

export const joinGroup = (groupId) => {
  return (dispatch) => {
    return MembershipAPIUtil.joinGroup(groupId).then((response)=>{
      return dispatch(receiveMembership(response));
    });
  };
};

export const unjoinGroup = (membershipId) => {
  return (dispatch) => {
    return MembershipAPIUtil.unjoinGroup(membershipId).then((response)=>{
      return dispatch(removeMembership(response));
    });
  };
};
