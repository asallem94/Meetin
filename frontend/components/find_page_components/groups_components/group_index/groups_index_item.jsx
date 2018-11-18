import React from 'react';
import { Link } from 'react-router-dom';

const GroupsIndexItem = ({group}) => {
  return (
    <Link to={`/groups/${group.id}`}>
      <li className="groups-index-item">
        <div className="group-titleing">
          <section className="group-title">
            {group.title}
          </section>
          <section className="group-subtitle">
            {group.members_count} members
          </section>
        </div>
        <img className="Groups-Image" src={group.img_url}/>
      </li>
    </Link>
  );
};

export default GroupsIndexItem;
