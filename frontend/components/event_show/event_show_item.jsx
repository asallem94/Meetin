import React from 'react';
import EventDatePost from './shared/event_date_post';
import RsvpContainer from './shared/rsvp_container';
import { Link } from 'react-router-dom'

const displayAttendees = ( event , users ) => {
  return event.attendees_ids.map((attendeeId) => {
    return (
      <img className="attendees-img-circle" key={attendeeId} src={users[attendeeId].profile_img_url}/>
    );
  });
};

const getFullDate = (start_date) => {
  const showDate = new Date(start_date);
  const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let hours = showDate.getHours();
  const ampm = hours >= 12 ? "pm" : "am" ;
  hours = hours % 12
  hours = hours ? hours : 12;
  let minutes = showDate.getMinutes();
  minutes = minutes < 10 ? '0'+minutes : minutes;
  return `${weekDays[showDate.getDay()]} ${months[showDate.getMonth()]} ${showDate.getDate()}, ${showDate.getFullYear()}, ${hours}:${minutes}${ampm}`;
}

const EventShowItem = ({event, users}) => {

  return (
    <Link className="event-show-item" to={`/events/${event.id}`}>
      <div className="event-show-item-content hovered-content">
        <div className="event-show-item-info">
          <EventDatePost start_date={event.start_date}/>
          <div className="event-brief-info">
            <h3 className="event-full-date-label">{getFullDate(event.start_date)}</h3>
            <h1 className="event-title-label">{event.title}</h1>
          </div>
        </div>
        <div className="host-info">
          <img className="show-organizer-circle" src={users[event.host_id].profile_img_url}/>
          <p className="host-name">hosted by {users[event.host_id].name}</p>
        </div>

        <p className="detail-container">{event.detail}</p>

        <div className="attending-status">
          {displayAttendees(event, users)}
          <p className="attendees-count">{event.attendees_count} going</p>
        </div>
        <RsvpContainer event={event}/>
      </div>
    </Link>
  );
};

export default EventShowItem
