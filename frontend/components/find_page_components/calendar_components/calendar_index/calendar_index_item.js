import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';

const CalendarIndexItem = ({event}) => {
  return (
    <div className="events-in-day-item">
      <Link to={`events/${event.id}`} className="link events-in-day-item">
        <div className="event-time">
          <h3>{Moment(event.start_date).format('LT')}</h3>
        </div>
        <div className="event-index-item-component">
          <h5 className="events-group-name">{event.group_name}</h5>
          <h4 className="events-group-title">{event.title}</h4>
          <h3 className="events-group-count">{`${event.attendees_count} Members going`}</h3>
        </div>
        <h3 className="time-until">{Moment(event.start_date).fromNow()}</h3>
      </Link>
    </div>
  );
};

export default CalendarIndexItem;
