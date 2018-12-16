import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './language-selector';

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="upper-footer-content">
          <Link to="/create" className="upper-footer-items">
            Start a new group
          </Link>
          <Link to="/login" className="upper-footer-items">
            Log in
          </Link>
        </div>
        <ul className="footer-topics">
          <a href="https://asallem94.github.io/"><li className="footer-topic">About the developer</li></a>
          <a href="https://www.meetup.com/"><li className="footer-topic">Meetup Original</li></a>
        </ul>
        <div className="footer-followers">
          <p className="footer-follow-us">
            Follow us
          </p>
          <ul className="follow-icons">
            <a href="https://asallem94.github.io/"><li className="follow-icon"><i className="fas fa-globe-americas"></i></li></a>
            <a href="https://www.linkedin.com/in/sallem-ahmed-44404596/"><li className="follow-icon"><i className="fab fa-linkedin"></i></li></a>
            <a href="https://angel.co/sallem-ahmed"><li className="follow-icon"><i className="fab fa-angellist"></i></li></a>
            <a href="https://github.com/asallem94/Meetin"><li className="follow-icon"><i className="fab fa-github"></i></li></a>
          </ul>
          <LanguageSelector/>
        </div>
        <div className="footer-corperate">
        <p className="footer-notes">
          © 2018 Meetin is a wholly owned subsidiary of App Academy.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
