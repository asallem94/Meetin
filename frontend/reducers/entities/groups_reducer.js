import { RECEIVE_FINDABLE_GROUPS, RECEIVE_GROUP } from '../../actions/meetin_actions';

import { merge } from 'lodash';

const groupsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);

  switch(action.type){
    case RECEIVE_FINDABLE_GROUPS:
      console.log(`group count ${Object.values(action.groups).length}`)
      return action.groups;
    case RECEIVE_GROUP:
      return merge({}, state, { [action.group.id]: action.group });
    default:
      return state;
  }
};

export default groupsReducer;
