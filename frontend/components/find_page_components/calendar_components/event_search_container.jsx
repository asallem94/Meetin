import React from 'react';
import Calendar from './calendar_index/calendar';
import CalendarIndex from './calendar_index/calendar_index';
import { connect } from 'react-redux';
import { fetchFindableEvents } from '../../../actions/event_actions';

class EventSearch extends React.Component {
  constructor(props){
    debugger
    super(props);
    this.state = props.filters;
  }
  componentDidMount(){
    debugger
    // this.props.fetchFindableEvents();
  }

  render(){
    debugger
    return (
      <div className="event-component">
        <div className="event-filters-box">
          <Calendar/>
        </div>
        <div className="display-events">
          <CalendarIndex/>
        </div>
      </div>
    );
  }
}

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    currentUser: currentUser,
    events: Object.values(state.entities.events),
  };
};


const mdp = (dispatch) => {
  return {
  };
};

const EventSearchContainer = connect(msp, mdp)(EventSearch);
export default EventSearchContainer;
