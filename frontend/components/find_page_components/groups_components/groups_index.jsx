import React from 'react';
import GroupsIndexItem from './groups_index_item';

const GroupIndex = ({groups}) => {
  const groupViewable = groups.map((group) =>(
    <GroupsIndexItem
    key={group.id}
    group={group}/>
  ));
  return (
    <ul className="groups-index">
      {groupViewable}
    </ul>
  );
};

export default GroupIndex;
