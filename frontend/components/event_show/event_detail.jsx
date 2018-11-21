import React from 'react';
import EventTimeLocation from './event_time_location'
const EventDetail = (props) => {

  if (!props.event){
    return null;
  }

  const showattentdee = (id) => {
    const user = props.users[id];
    return (
      <div key={id} className="event-member-content hovered-content">
        <img className="show-member-circle" src={props.users[id].profile_img_url}/>
        <section className="event-organizer-textinfo">
          <li className="member-type">{id === props.event.host_id ? "Host" : "Member"}</li>
          <li className="member-name">{props.users[id].name}</li>
        </section>
      </div>
    );
  };

  const atendees = props.event.attendees_ids.map((id)=>{
    return (
      showattentdee(id)
    );
  });

  return (
    <div className="background">
      <div className="about-us-content">
        <div className="main-detail-content">
          <img className="event-img" src={props.event.event_img_url}/>
          <div className="about-us">
            <h1 className="event-headings">Details</h1>
            <article className="event-description">
              {props.event.detail}
            </article>
          </div>

          <h1 className="event-headings"> attendees ({props.event.attendees_count})</h1>

          <div className="event-membership-container">
            <ul className="event-members-container">
              {atendees}
            </ul>
          </div>
          <div className="no-discusions-content">
            <h1 className="event-headings">Discussions (0)</h1>
            <div className="empty-discussions">
              <i className="fas fa-comments"></i>
              <p className="discussions">No discussions yet</p>
            </div>
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
