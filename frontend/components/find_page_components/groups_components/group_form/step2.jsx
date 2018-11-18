import React from 'react';

const Step2 = ({unhideStep, interests}) => {

  const displayInterests = interests.map((interest) => (
    <label className="interest-label"> {interest.topic_titles}
      <i class="far fa-heart"></i><input type="checkbox" key={interest.id} className="interest-checkbox"/>
    </label>
  ));

  return (

    <div id="2" className="step-container hidden-step">
      <img className="new-group-icon" src="https://secure.meetupstatic.com/s/img/322408653975454564695/start_v2/textBubbles.svg"/>
      <div className="step-content">
        <h3 className="step-label">STEP 2 OF 4</h3>
        <h1 className="step-action">What will your meetin be about?</h1>
        <div className="step-inputs">
          <input type="text" placeholder="Search for a topic" className="interest-filter"/>
          {displayInterests}
        </div>
        <button onClick={(e)=>unhideStep('3', e)} className="continue-button">Next</button>
      </div>
    </div>

  );
};

export default Step2;
