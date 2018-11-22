import React from 'react';
import Calendar from './calendar_index/calendar';
import CalendarIndex from './calendar_index/calendar_index';
import { connect } from 'react-redux';
import { updateFilters } from './../../../actions/filter_actions';
import { fetchFindableEvents } from './../../../actions/event_actions';
// import { fetchFindableEvents } from '../../../actions/event_actions';

// class EventSearch extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = props.filters;
//   }
//
//   render(){
//     return (
//       <div className="event-component">
//           <Calendar filters={this.state} updateFilters={this.props.updateFilters}/>
//
//       </div>
//     );
//   }
// }

// <div className="event-filters-box">
// </div>
const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    filters: state.ui.filters
    // currentUser: currentUser,
    // events: Object.values(state.entities.events),
  };
};
const mdp = dispatch => {
  return {
    updateFilters: (filters)=>(dispatch(updateFilters(filters))),
    fetchFindableEvents: (filters)=>(dispatch(fetchFindableEvents(filters)))
  };
};


const EventSearchContainer = connect(msp, mdp)(Calendar);
export default EventSearchContainer;
