import React from 'react';
import EventShowItem from './../event_show/event_show_item';

class GroupMeetins extends React.Component{
  constructor (props){//{group, events, users}
    super(props);
    this.displayEvents = this.displayEvents.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.state = {pastUpcomingController: "Upcoming"};
  }

  displayEvents(){
    const today = new Date();
    let event_ids;
    if (this.state.pastUpcomingController === "Upcoming"){
      event_ids = this.props.group.event_ids
      .filter(id => new Date(this.props.events[id].start_date) > today)
      .sort((id_a, id_b) => new Date(this.props.events[id_a].start_date) - new Date(this.props.events[id_b].start_date));
    } else {
      event_ids = this.props.group.event_ids
      .filter(id => new Date(this.props.events[id].start_date) <= today)
      .sort((id_a, id_b) => new Date(this.props.events[id_a].start_date) - new Date(this.props.events[id_b].start_date));
    }
    return event_ids.map((eventId) => {
      return (
        <EventShowItem key={eventId} event={this.props.events[eventId]} users={this.props.users}/>
      );
    });
  }

  filterEvents(filterType){
    return (e) => {
      this.setState({pastUpcomingController :filterType});
    };
  }

  render(){
    return (
      <div className="background">
        <div className="about-us-content">
          <div className="meetin-controller-banner">
            <div className="past-upcoming-controller-container">
              <section onClick={this.filterEvents("Past")} className="past-events">
                Past Events
              </section>
              <section onClick={this.filterEvents("Upcoming")} className="upcoming-events">
                Upcoming Events
              </section>
            </div>
          </div>
          <div className="main-meetin-content">
            {this.displayEvents()}
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMeetins;
