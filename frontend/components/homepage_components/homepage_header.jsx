import React from 'react';
import { Link } from 'react-router-dom';

const HomepageHeader = () => {
  return (
    <div className="homepage-header-container">
      <video autoPlay muted loop className="header-video">
        <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4"/>
      </video>

      <section className="homepage-header-content">
        <h1 className="header-title">
          What do you love?
        </h1>
        <h4 className="header-subtitle">
          Do more of it with Meet in
        </h4>
        <Link className="homepage-header-signup" to="/signup">
          Signup
        </Link>
      </section>
    </div>
  );
};
export default HomepageHeader
