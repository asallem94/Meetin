import React from 'react';
import GroupsIndexItem from './groups_index_item';

const GroupIndex = ({groups}) => {
  const groupViewable = groups.map((group) =>(
    <GroupsIndexItem
    key={group.id}
    group={group}/>
  ));
  return (
    <div className="groups-index">
      {groupViewable}
    </div>
  );
};

export default GroupIndex;
