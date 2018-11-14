import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Link to="/" className="logo">Meetin</Link>
      <div className="nav-menu">
        <Link to="/signup" className="new-group-button">Start a new Group</Link>
        <Link to="/signup" className="auth-item">Sign up</Link>
        <Link to="/login"className="auth-item">Log in</Link>
      </div>
    </div>
  );
};
export default Navigation
