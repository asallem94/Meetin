import React from 'react';

const GroupDetail = (props) => {

  if (!props.group){
    return null;
  }
  const showMember = (id, organizer) => {
    const user = props.users[id];
    return (
      <div className={(organizer ? "group-organizer-content hovered-content" : "group-member-content hovered-content")}>
        <img className="show-member-circle" src={props.users[id].profile_img_url}/>
        <section className="group-organizer-textinfo">
          <li className="member-type">{organizer ? "Organized by" : "Member"}</li>
          <li className="member-name">{props.users[id].name}</li>
        </section>
      </div>
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
        <div className="no-discusions-content">
          <h1 className="group-headings">Discussions (0)</h1>
          <div className="empty-discussions">
            <i className="fas fa-comments"></i>
            <p className="discussions">No discussions yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
