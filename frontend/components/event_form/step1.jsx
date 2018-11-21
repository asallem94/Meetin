import React from 'react';

const Step1 = ({unhideStep, city, startDate, endDate}) => {

  return (
    <div id="1" className="step-container">
      <img className="new-group-icon" src="https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg"/>
      <div className="step-content">
        <h3 className="step-label">STEP 1 OF 4</h3>
        <h1 className="step-action">Where will you meet-in?</h1>
        <article className="inline">
          <div id="city" className="city">{city}</div><span>(</span><span className="selector">change location</span><span>)</span>
        </article>
        <div className="date-time-input">
          <h5 className="when-question">When does it start?</h5>
          <div className="dt-input-container">
            <label className="dt-label">Date
              <input id="start-date" id="start-date" className="dt-input-field" type="date" value={startDate}/>
            </label>
            <label className="dt-label">Time
              <input id="start-time" className="dt-input-field" type="time" value={"12:00 am"}/>
            </label>
          </div>
        </div>
        <div className="date-time-input">
          <h5 className="when-question">When does it end?</h5>
          <div className="dt-input-container">
            <label className="dt-label">Date
              <input id="end-date" className="dt-input-field" type="date" value={endDate}/>
            </label>
            <label className="dt-label">Time
              <input id="end-time" className="dt-input-field" type="time" value={"12:00am"}/>
            </label>
          </div>
        </div>
        <button onClick={(e)=>unhideStep('2', e)} className="continue-button">Next</button>
      </div>
    </div>
  );
};

export default Step1;
