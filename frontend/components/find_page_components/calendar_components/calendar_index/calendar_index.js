import React from 'react';
import CalendarsIndexSection from './calendar_index_section';
import { connect } from 'react-redux';
import { fetchFindableEvents } from '../../../../actions/event_actions';




class CalendarIndex extends React.Component {
  constructor(props){
    super(props);
    // this.eventGrouping = this.eventGrouping.bind(this);
    this.eventGrouper = this.eventGrouper.bind(this);
  }

  componentDidMount(){
    debugger
    this.props.fetchFindableEvents();
  }

  eventGrouper(date, eventId, grouper){
    refDate = Date(date);
    if (grouper[refDate]) {
      grouper[refDate].push(eventId);
    } else {
      grouper[refDate] = [eventId];
    }
    return grouper;
  }

  eventGrouping(){
    const groupedEvents = {};
    // debugger
    const count = Object.keys(this.props.events).length;
    for (var i = 0; i < this.props.events.length; i++) {
      eventGrouper(events[i].start_date, events[i].id, groupedEvents);
    }
    return groupedEvents;
  }

  render(){
    // const eventViewable = this.eventGrouping().map((eventDate, indx) =>(
    //   <ul>
    //     <h1>{eventDate}</h1>
    //     <CalendarsIndexSection
    //       key={indx}
    //       events={this.groupedEvents[eventDate]}/>
    //   </ul>
    // ));
    return (
      <div className="events-index">
        Hello
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
