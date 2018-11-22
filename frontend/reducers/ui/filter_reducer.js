
import { UPDATE_RADI, UPDATE_START_DATE, UPDATE_END_DATE, UPDATE_QUERY_SEARCH, UPDATE_ALL_FILTERS } from './../../actions/filter_actions';
import { merge } from 'lodash';
import Moment from 'moment';

const d = new Date();
let lastDate = new Date(d);
lastDate.setMonth(lastDate.getMonth()+1);
lastDate.setDate(0);

const filterReducer = ( state = {queryType:"groups", query: "", radi: 5, filterStartDate: Moment(d).format('L'), filterEndDate: Moment(lastDate).format('L'), eventFilterType: "All Meetins"},  action ) => {
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
    case UPDATE_ALL_FILTERS:
      return merge({}, state, action.filters);
    default:
      return state;
  }
};

export default filterReducer;
