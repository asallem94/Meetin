import React from 'react';
import { Link } from 'react-router-dom';

const GenInfo = ({group, users, currUserId}) => {


  let createEvent = null;
  if (currUserId === group.organizer_id) {
    createEvent = (
      <Link to={`/events/${group.id}/new`}>
        <button className="create-event-button clickable">
          Create New Event
        </button>
      </Link>
    );
  }
  return (
    <header className="group-show-header">
      <img className="group-show-img" src={group.img_url}/>
      <div className="group-show-info">
        <h1 className="group-show-title">
          {group.title}
        </h1>
        <div className="group-show-subinfo">
          <li>{group.city}</li>
          <li className="dot"> </li>
          <li>{group.members_count} members</li>
          <li className="dot"></li>
          <li>{(group.private) ? "Private" : "Public"} group</li>
        </div>
        <div className="group-organizer-info">
          <img className="show-organizer-circle" src={users[group.organizer_id].profile_img_url}/>
          <section className="group-organizer-textinfo">
            <li>Organized by</li>
            <li className="organizer-name">{users[group.organizer_id].name}</li>
          </section>
        </div>

        {createEvent}
      </div>

    </header>
  );
};

export default GenInfo;
