import React from 'react';
import Moment from 'moment';

const Step1 = ({unhideStep, handleChangeLocaiton, city, dateTime, update}) => {

  return (
    <div id="1" className="step-container">
      <img className="new-group-icon" src="https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg"/>
      <form onSubmit={(e)=>unhideStep('2', e)} className="step-content">
        <h3 className="step-label">STEP 1 OF 4</h3>
        <h1 className="step-action">Where will you meet-in?</h1>
        <article className="inline">
          <div id="city" className="city">{city}</div><span>(</span><span className="selector clickable" onClick={handleChangeLocaiton}>change location</span><span>)</span>
        </article>
        <label className="dt-label">Address
          <input id="address" className="dt-input-field" required type="text" placeholder="123 apple st. NY, 100937"/>
        </label>
        <div className="date-time-input">
          <h5 className="when-question">When does it start?</h5>
          <div className="dt-input-container">
            <label className="dt-label">Date
              <input id="start-date" className="dt-input-field" type="date" onChange={update("startDate")} value={dateTime.startDate} min={Moment().format("YYYY-MM-DD")}/>
            </label>
            <label className="dt-label">Time
              <input id="start-time" className="dt-input-field" type="time" format="hh:mm"onChange={update("startTime")} value={dateTime.startTime} min={(dateTime.startDate === Moment().format("YYYY-MM-DD")) ? Moment().format("hh:mm") : "00:00"}/>
            </label>
          </div>
        </div>
        <div className="date-time-input">
          <h5 className="when-question">When does it end?</h5>
          <div className="dt-input-container">
            <label className="dt-label">Date
              <input id="end-date" className="dt-input-field" type="date" onChange={update("endDate")} value={dateTime.endDate} min={dateTime.startDate}/>
            </label>
            <label className="dt-label">Time
              <input id="end-time" className="dt-input-field" type="time" format="hh:mm" onChange={update("endTime")} value={dateTime.endTime} min={(dateTime.startDate === dateTime.endDate ? dateTime.startTime : "00:00")}/>
            </label>

          </div>
        </div>
        <input type="submit" className="continue-button" value="Next"/>
      </form>
    </div>
  );
};

export default Step1;
