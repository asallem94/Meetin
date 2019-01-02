import React from 'react';
import EventTimeLocation from './event_time_location';
import { Link } from 'react-router-dom';
import EditEventImageContainer from '../edit_event_img_container';

const EventDetail = (props) => {

  if (!props.event){
    return null;
  }

  const showAttentdee = (id) => {
    const user = props.users[id];
    return (
      <Link to={`/users/${id}`} key={id} className="event-member-content hovered-content">
        <img className="show-member-circle" src={props.users[id].imgUrl}/>
        <section className="event-organizer-textinfo">
          <li className="member-type">{id === props.event.host_id ? "Host" : "Member"}</li>
          <li className="member-name">{props.users[id].name}</li>
        </section>
      </Link >
    );
  };

  const attendees = props.event.attendees_ids.map((id)=>{
    return (
      showAttentdee(id)
    );
  });

  return (
    <div className="background">
      <div className="about-us-content">
        <div className="main-detail-content">
          <div className="img-container">
            <img className="event-img" src={props.event.imgUrl}/>
            <EditEventImageContainer leaderId={props.event.host_id} entityId={props.event.id} entity ="event"/>
          </div>
          <div className="about-us">
            <h1 className="event-headings">Details</h1>
            <article className="event-description">
              {props.event.detail}
            </article>
          </div>

          <h1 className="event-headings"> attendees ({props.event.attendees_count})</h1>

          <div className="event-membership-container">
            <ul className="event-members-container">
              {attendees}
            </ul>
          </div>
        </div>
        <div className="detail-banner">
          <EventTimeLocation event={props.event} className="fixed-location-date-container" />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
