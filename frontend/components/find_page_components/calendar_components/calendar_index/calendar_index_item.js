import React from 'react';

const CalendarIndexItem = ({event}) => {


  return (
    <div className="events-in-day-section">
      {event.title}
    </div>
  );
};

export default CalendarIndexItem;
