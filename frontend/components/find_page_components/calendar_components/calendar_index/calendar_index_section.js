import React from 'react';

const CalendarIndexSection = ({events}) => {

  const eventViewable = Object.keys(groupedEvents)events.map((event) =>(
    <ul>
      <CalendarsIndexItem
        key={event.id}
        event={event}/>
    </ul>
  ));
  return (
    <div className="events-in-day-section">
      {eventViewable}
    </div>
  );
};

export default CalendarIndexSection;
