import React from 'react';
import CalendarIndexItem from './calendar_index_item';

const CalendarIndexSection = ({events, eventIds}) => {
  const eventViewable = eventIds.map((id, idx) =>(
      <CalendarIndexItem
        key={idx}
        className="events-in-day-item"
        event={events[id]}/>
  ));
  return (
    <div className="events-in-day-section">
      {eventViewable}
    </div>
  );
};

export default CalendarIndexSection;
