import React from 'react';
import EventDatePost from './shared/event_date_post';
import RsvpContainer from './shared/rsvp_container';
import { Link } from 'react-router-dom'
import GetFullDateTime from './shared/get_full_date_time';

const displayAttendees = ( event , users ) => {
  return event.attendees_ids.map((attendeeId) => {
    return (
      <img className="attendees-img-circle" key={attendeeId} src={users[attendeeId].imgUrl}/>
    );
  });
};

const EventShowItemSummarized = ({event, users}) => {

  return (
    <Link className="event-show-item" to={`/events/${event.id}`}>
      <div className="event-show-item hovered-content">
        <div className="event-show-item-info">
          <EventDatePost start_date={event.start_date}/>
          <div className="event-brief-info">
            <h1 className="event-full-date-label">{GetFullDateTime(event.start_date)}</h1>
            <h1 className="event-title-label">{event.title}</h1>
          </div>
        </div>
        <div className="host-info">
          <img className="show-organizer-circle" src={users[event.host_id].imgUrl}/>
          <p className="host-name">hosted by {users[event.host_id].name}</p>
        </div>

        <div className="attending-status">
          {displayAttendees(event, users)}
          <p className="attendees-count">{event.attendees_count} going</p>
        </div>
        <RsvpContainer event={event}/>
      </div>
    </Link>
  );
};

export default EventShowItemSummarized
