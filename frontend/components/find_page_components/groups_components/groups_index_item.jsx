import React from 'react';

const GroupsIndexItem = ({group}) => {
  return (
    <li className="groups-index-item">
      <div className="group-titleing">
        <section className="group-title">
          {group.title}
        </section>
        <section className="group-subtitle">
          {group.members_count} members
        </section>
      </div>
      <img src={group.img_url}/>
    </li>
  );
};

export default GroupsIndexItem;
