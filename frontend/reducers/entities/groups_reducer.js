import { RECEIVE_FINDABLE_GROUPS, RECEIVE_GROUP } from '../../actions/meetin_actions';
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../../actions/membership_actions';
import { RECEIVE_USER, RECEIVE_CURRENT_USER } from '../../actions/auth_actions';
import { RECEIVE_DISCUSSION } from '../../actions/discussion_actions';

import { merge, remove } from 'lodash';

const groupsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);

  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, action.groups);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.groups);
    case RECEIVE_FINDABLE_GROUPS:
      return merge({}, state, action.groups);
    case RECEIVE_GROUP:
      return merge({}, state, { [action.group.id]: action.group });
    case RECEIVE_DISCUSSION:
      if (defaultState[action.discussion.group_id].discussionIds){
        defaultState[action.discussion.group_id].discussionIds.push(action.discussion.id);
      }
      return defaultState;
    case RECEIVE_MEMBERSHIP:
      defaultState[action.membership.group_id].member_ids.push(action.membership.user_id);
      merge(defaultState, action.groups);
      return defaultState;
    case REMOVE_MEMBERSHIP:
      _.remove(defaultState[action.membership.group_id].member_ids, (userId)=>userId === action.membership.user_id);
      merge(defaultState, action.groups);
      return defaultState;
    default:
      return state;
  }
};

export default groupsReducer;
