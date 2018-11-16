import React from 'react';

const GenInfo = ({group, users}) => {
  if (!group){
    return null;
  }
  return (
    <header className="group-show-header">
      <div className="group-show-img">
        <img src={group.img_url}/>
      </div>
      <div className="group-show-info">
        <h1 className="group-show-title">
          {group.title}
        </h1>
        <div className="gorup-show-subinfo">
          <li>{group.city}</li>
          <li>{group.members_count} members</li>
          <li>{(group.private) ? "Private" : "Public"} group</li>
        </div>
        <div className="group-organizer-info">
          <section>
            <li>Organized by</li>
          </section>
        </div>
      </div>

    </header>
  )
  // <img className="profile-circle" src={users[group.organizer_id]}/>
  // <li>{users[group.organizer_id].name}</li>
};

export default GenInfo;
