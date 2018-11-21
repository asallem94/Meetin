import React from 'react';

const Step4 = ({handleSubmit, loggedIn}) => {

  return (

    <div id="4" className="step-container hidden-step">
      <img className="new-group-icon" src="https://secure.meetupstatic.com/s/img/533695931247066883484/start_v2/people.svg"/>
      <div className="step-content">
        <h3 className="step-label">STEP 4 OF 4</h3>
        <h1 className="step-action">What it means to be a Meetin</h1>
        <article className="group-principles">
          <li className="list">Real, in-person conversations</li>
          <li className="list">Open and honest intentions</li>
          <li className="list">Always safe and respectful</li>
          <li className="list">Put your members first</li>
        </article>
        <button onClick={handleSubmit} className="continue-button">{"Create Group"}</button>
      </div>
    </div>

  );
};

export default Step4;
