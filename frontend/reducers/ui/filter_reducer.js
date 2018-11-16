
import { UPDATE_RADI, UPDATE_START_DATE, UPDATE_END_DATE, UPDATE_QUERY_SEARCH } from './../../actions/filter_actions';
import { merge } from 'lodash';

const filterReducer = ( state = { query: "", radi: 5 }, action ) => {
  Object.freeze(state);
  switch(action.type){
    case UPDATE_RADI:
      return merge({}, state, {radi: action.radi});
    case UPDATE_START_DATE:
      return merge({}, state, {startDate: action.startDate});
    case UPDATE_END_DATE:
      return merge({}, state, {endDate: action.endDate});
    case UPDATE_QUERY_SEARCH:
      return merge({}, state, {querySearch: action.querySearch});
    default:
      return state;
  }
};

export default filterReducer;
