import { RECEIVE_ALL_INTERESTS } from '../../actions/meetin_actions';

import { merge } from 'lodash';

const interestsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_INTERESTS:
      return action.interests;
    default:
      return state;
  }
};

export default interestsReducer;
