import React from 'react';
import EventShowItem from './../event_show/event_show_item';

const GroupMeetins = ({group, events, users}) => {

  const displayEvents = group.event_ids.map((eventId) => {
    return (
      <EventShowItem key={eventId} event={events[eventId]} users={users}/>
    );
  });

  return (
    <div className="background">
      <div className="about-us-content">
        <div className="meetin-controller-banner">
        </div>
        <div className="main-meetin-content">
          <ul className="group-members-container">
            {displayEvents}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroupMeetins
