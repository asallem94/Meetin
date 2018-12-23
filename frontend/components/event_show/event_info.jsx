import React from 'react';
import EventDatePost from './shared/event_date_post';
import { Link } from 'react-router-dom';
import RsvpContainer from './shared/rsvp_container';
import GetFullDateTime from './shared/get_full_date_time';

const EventInfo = ({event, users, currentUserId}) => {
  return (
      <header className="event-show-header">
        <EventDatePost className="event-date-post" start_date={event.start_date}/>
        <div className="event-show-info">
          <li className="organizer-name">
            {GetFullDateTime(event.start_date)}
          </li>
          <h1 className="event-show-title">
            {event.title}
          </h1>
          <div className="event-organizer-info">
            <img className="show-organizer-circle" src={users[event.host_id].imgUrl}/>
            <section className="event-organizer-textinfo">
              <li className="organizer-name">Hosted by {users[event.host_id].name}</li>
              <li className="organizer-name">From <Link to={`/groups/${event.group_id}`}>{event.group_name}</Link></li>
              <li className="organizer-name">{event.private ? "Private" : "Public"} Group</li>
            </section>
          </div>
        </div>

        <div className="event-rsvp-container">
          <h2>
            Are you going?
          </h2>
          <div>
            <RsvpContainer event={event} />
          </div>
        </div>

      </header>
  );
};

export default EventInfo;
