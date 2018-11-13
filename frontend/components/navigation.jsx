import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <h1 className="logo">Meetin</h1>
      <div className="menu">
        <button className="new-group-button">Start a new Group</button>
        <Link to="/signup"><button className="auth-item">Sign up</button></Link>
        <Link to="/login"><button className="auth-item">Log in</button></Link>
      </div>
    </div>
  );
};
export default Navigation
