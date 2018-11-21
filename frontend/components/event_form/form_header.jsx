import React from 'react';
import { Link } from 'react-router-dom';

const FormHeader = () => {
  return (
    <div className="group-form-header-container">
      <img className="header-img" src="https://irp-cdn.multiscreensite.com/4110cd41/dms3rep/multi/mobile/party+image.jpg"/>

      <section className="groupform-header-content">
        <h1 className="group-header-title">
        Start a new Meetup
        </h1>
        <h4 className="group-header-subtitle">
        We'll help you find the right people to make it happen.
        </h4>
      </section>


    </div>
  );
};
export default FormHeader;
