import React from 'react';
import Moment from 'moment';

const CalendarIndexItem = ({event}) => {
  debugger
  return (
    <div className="events-in-day-item">
      <div className="event-time">
        <h3>{Moment(event.start_date).format('LT')}</h3>
      </div>
      <div className="event-index-item-component">
        <h3>{event.group_name}</h3>
        <h3>{event.title}</h3>
        <h3>{`${event.attendees_count} Members going`}</h3>
      </div>
      <h3 className="time-until">{Moment(event.start_date).startOf('day').fromNow()}</h3>
    </div>
  );
};

export default CalendarIndexItem;
