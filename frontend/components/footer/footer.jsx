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
          <li className="footer-topic">About us</li>
          <a href="https://www.meetup.com/"><li className="footer-topic">Meetup Original</li></a>
        </ul>
        <div className="footer-followers">
          <p className="footer-follow-us">
            Follow us
          </p>
          <ul className="follow-icons">
            <li className="follow-icon"><i className="fab fa-facebook-square"></i></li>
            <li className="follow-icon"><i className="fab fa-instagram"></i></li>
            <li className="follow-icon"><i className="fas fa-globe-americas"></i></li>
            <li className="follow-icon"><i className="fab fa-github"></i></li>
            <li className="follow-icon"><i className="fas fa-envelope"></i></li>

          </ul>
          <LanguageSelector/>
        </div>
        <div className="footer-corperate">
        <p className="footer-notes">
          © 2018 Meetin  Meetin is a wholly owned subsidiary of App Academy.
        </p>
        <p className="footer-notes">
          Privacy Terms
        </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
