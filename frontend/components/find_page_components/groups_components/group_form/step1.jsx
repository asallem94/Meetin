import React from 'react';

const Step1 = ({unhideStep}) => {

  return (
    <div id="1" className="step-container">
      <img className="new-group-icon" src="https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg"/>
      <div className="step-content">
        <h3 className="step-label">STEP 1 OF 4</h3>
        <h1 className="step-action">What's your new Meetup Group's hometown?</h1>
        <article className="inline">
          <div className="city">City</div><span>(</span><span className="selector">change location</span><span>)</span>
        </article>
        <button onClick={(e)=>unhideStep('2', e)} className="continue-button">Next</button>
      </div>
    </div>
  );
};

export default Step1;
