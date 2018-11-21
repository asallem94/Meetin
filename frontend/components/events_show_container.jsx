import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from './../actions/event_actions';
import EventInfo from './event_show/event_info';
import EventDetail from './event_show/event_detail';
import { Route } from 'react-router';

class EventShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.eventId);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    document.getElementById("movable").classList.add('fixed-location-date-container');

  }

  componentDidUpdate(prevParams) {
    if (prevParams.match.params.eventId !== this.props.match.params.eventId){
      this.props.fetchEvent(this.props.match.params.eventId);
    }
  }

  render(){
    if ( !this.props.event ) {
      return null;
    }
    // if ( !this.props.event.host_id ) {
    //   return null;
    // }
    return (
      <div className="events-show-page">
        <EventInfo event={this.props.event} users={this.props.users} currentUserId={this.props.currUserId}/>
        <EventDetail event={this.props.event} users={this.props.users} />

      </div>
    );
  }
}
// <Switch>
// <Route exact path="/" component={EventDetail} event={this.props.event} users={this.props.users} />
// <Route exact path="/meetins" component={EventDetail} event={this.props.event} users={this.props.users} />
// </Switch>

const msp = (state, ownProp) => {
  const currUserId = state.session.currentUserId;
  return {
    currUserId: currUserId,
    event: state.entities.events[ownProp.match.params.eventId],
    users: state.entities.users,
  };
};

const mdp = (dispatch) => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
  };
};

const EventsShowContainer = connect(msp, mdp)(EventShow);

export default EventsShowContainer;
