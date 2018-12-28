import React from 'react';
import GroupsIndexItem from './groups_index_item';

const GroupIndex = ({groups, filters}) => {
  if (!groups[0].lat || !groups[0].lng){
    return null;
  }
  // debugger
  const groupViewable = groups.filter((group) =>{
    return Math.pow(group.lng - filters.coord.lng, 2) + Math.pow(group.lat - filters.coord.lat, 2) < Math.pow(filters.radi/68.703, 2) &&
    group.title.toLowerCase().includes(filters.query.toLowerCase())
  }).map((group) =>(
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
