import { REQUEST_FINDABLE_GROUPS, REQUEST_GROUP } from '../../actions/meetin_actions';

import { merge } from 'lodash';

const groupsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);

  switch(action.type){
    case REQUEST_FINDABLE_GROUPS:
      return action.groups;
    case REQUEST_GROUP:
      return merge({}, state, { [action.group.id]: action.group });
    default:
      return state;
  }
};

export default groupsReducer;
