import React from 'react';
import EventShowItemSummarized from './../event_show/event_show_item_summarized';
import { Link } from 'react-router-dom';
import NoDiscussions from './no_discussions'

const GroupDetail = (props) => {
  const displayGroupEvents = (event_ids, events) => {
    return event_ids.map((eventId) => {
      return <EventShowItemSummarized key={eventId} event={events[eventId]} users={props.users}/>;
    });
  };

  const showMember = (id, organizer) => {
    const user = props.users[id];
    return (
      <Link to={`/users/${id}`} key={id} className={(organizer ? "group-organizer-content hovered-content" : "group-member-content hovered-content")}>
        <img className="show-member-circle" src={props.users[id].imgUrl}/>
        <section className="group-organizer-textinfo">
          <li className="member-type">{organizer ? "Organized by" : "Member"}</li>
          <li className="member-name">{props.users[id].name}</li>
        </section>
      </Link>
    );
  };

  const members = props.group.member_ids.map((id)=>{
    return (
      showMember(id, false)
    );
  });
  return (
    <div className="background">
      <div className="about-us-content">
        <div className="main-detail-content">
          <div className="about-us">
            <h1 className="group-headings">What we're about</h1>
            <article className="group-description">
              {props.group.description}
            </article>
          </div>


          <h1 className="group-headings">Members ({props.group.members_count})</h1>

          <div className="group-membership-container">
            {showMember(props.group.organizer_id , true)}
            <ul className="group-members-container ">
              {members}
            </ul>
          </div>

        </div>
        <div className="detail-banner">
          {displayGroupEvents(props.group.event_ids, props.events)}
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
