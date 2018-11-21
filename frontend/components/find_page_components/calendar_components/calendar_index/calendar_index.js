import React from 'react';
import CalendarsIndexItem from './events_index_item';

const eventGrouper = (date, eventId, grouper) => {
  refDate = new Date(date.getFullYear(), date.getDate(), date.getMonth())
  if (grouper[refDate]) {
    grouper[refDate].push(eventId)
  } else {
    grouper[refDate] = [eventId]
  }
  return grouper;
}

const eventGrouping = (events) => {
  const groupedEvents = {}
  for (var i = 0; i < events.length; i++) {
    eventGrouper(events[i].start_date, events[i].id, groupedEvents)
  }
  return groupedEvents;
}

const CalendarIndex = ({events}) => {
  groupedEvents = eventGrouping(events);
  const eventViewable = Object.keys(groupedEvents)events.map((eventDate, indx) =>(
    <ul>
    <h1>{eventDate}</h1>
    <CalendarsIndexSection
      key={indx}
      events={groupedEvents[eventDate]}/>
    </ul>
  ));
  return (
    <div className="events-index">
      {eventViewable}
    </div>
  );
};

export default CalendarIndex;
