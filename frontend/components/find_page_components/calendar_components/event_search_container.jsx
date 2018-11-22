import React from 'react';
import Calendar from './calendar_index/calendar';
import CalendarIndex from './calendar_index/calendar_index';
import { connect } from 'react-redux';
// import { fetchFindableEvents } from '../../../actions/event_actions';

class EventSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = props.filters;
  }

  render(){
    return (
      <div className="event-component">
        <div className="event-filters-box">
          <Calendar filters={this.state}/>
        </div>
        <div className="display-events">
          <CalendarIndex filters={this.state}/>
        </div>
      </div>
    );
  }
}

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    // currentUser: currentUser,
    // events: Object.values(state.entities.events),
  };
};



const EventSearchContainer = connect(msp)(EventSearch);
export default EventSearchContainer;
