import React from 'react';

const GroupDetail = (props) => {
  return (
    <div className="about-us-content">
      <div className="about-us">
        <h1 className="about-us-title">What we're about</h1>
        <article className="group-desctiption">
          {props.group.desctiption}
        </article>
      </div>

      <div className="group-organizer-content">
        <img className="show-organizer-circle" src={props.users[props.group.organizer_id].profile_img_url}/>
        <section className="group-organizer-textinfo">
          <li>Organized by</li>
          <li className="organizer-name">{props.users[props.group.organizer_id].name}</li>
        </section>
      </div>
      <div className="group-members-content">
      </div>
      <div className="no-discusions-content">
        <h1 className="about-us-title">Discussions (0)</h1>
        <div className="empty-discussions">
        </div>
      </div>


    </div>
  );
};

export default GroupDetail;
