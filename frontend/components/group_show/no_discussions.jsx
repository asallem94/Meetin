import React from 'react';

const NoDiscussions = ()=>{
  return (
    <div className="no-discusions-content">
      <h1 className="group-headings">Discussions (0)</h1>
      <div className="empty-discussions">
        <i className="fas fa-comments"></i>
        <p className="discussions">No discussions yet</p>
      </div>
    </div>
  );
};

export default NoDiscussions;
