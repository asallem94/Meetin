import React from 'react';
import CalendarsIndexSection from './calendar_index_section';
import Moment from 'moment';
import { connect } from 'react-redux';
import { fetchFindableEvents } from '../../../../actions/event_actions';




class CalendarIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = props.filters;
    this.eventGrouping = this.eventGrouping.bind(this);
    this.eventGrouper = this.eventGrouper.bind(this);
    this.eventGrouping = this.eventGrouping.bind(this);
  }

  eventGrouper(date, eventId, grouper){
    const refDate = Moment(date).format("YYYY-MM-DD");
    if (grouper[refDate]) {
      grouper[refDate].push(eventId);
    } else {
      grouper[refDate] = [eventId];
    }
    return grouper;
  }

  eventGrouping(){
    const groupedEvents = {};
    const eventIds = Object.keys(this.props.events);
    for (var i = 0; i < eventIds.length; i++) {
      this.eventGrouper(this.props.events[eventIds[i]].start_date, this.props.events[eventIds[i]].id, groupedEvents);
    }
    return groupedEvents;
  }

  render(){

    const groupedEvents = this.eventGrouping();
    const groupings = Object.keys(groupedEvents);
    const eventViewable = groupings
      .sort((groupingDate_a, groupingDate_b) => new Date(groupingDate_a) - new Date(groupingDate_b))
      .map((eventDate, indx) =>(
        <ul key={indx}>
          <h5 className="calendar-index-section-header">{Moment(eventDate).format("LL")}</h5>
          <CalendarsIndexSection
            eventIds={groupedEvents[eventDate]}
            events={this.props.events}/>
        </ul>
      ));

    return (
      <div className="events-index">
        {eventViewable}
      </div>
    );
  }
}
// {eventViewable}


const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    currentUser: currentUser,
    events: state.entities.events,
  };
};


const mdp = (dispatch) => {
  return {
    fetchFindableEvents: (filters) => dispatch(fetchFindableEvents(filters)),
  };
};

const CalendarIndexContainer = connect(msp, mdp)(CalendarIndex);

export default CalendarIndexContainer;
