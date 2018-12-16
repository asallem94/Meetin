import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from './../actions/event_actions';
import { fetchInterests } from './../actions/meetin_actions';
import { Route } from 'react-router-dom';
import FormHeader from './event_form/form_header';
import Step1 from './event_form/step1';
import Step2 from './event_form/step2';
import Step3 from './event_form/step3';
import Step4 from './event_form/step4';
import Moment from 'moment';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.unhideStep = this.unhideStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCoordinates = this.handleCoordinates.bind(this);
    this.handleChangeLocaiton = this.handleChangeLocaiton.bind(this);
    this.update = this.update.bind(this);
    this.state = {city: "", lng: "", lat: "", startDate: Moment().format("YYYY-MM-DD"), endDate: Moment().format("YYYY-MM-DD"), startTime:"10:00", endTime: "14:00"};
  }

  componentDidMount(){
    this.handleCoordinates( this.props.currentUser.lat, this.props.currentUser.lng );
    this.props.fetchInterests();
  }

  handleChangeLocaiton(){
    const handleCoords = (location) => this.location ={
      lat: location.coords.latitude,
      lng: location.coords.longitude
    };
    navigator.geolocation.getCurrentPosition(handleCoords);
  }
  handleCoordinates(lat, lng){
    const api_key = "APPID=6c47a97e3a341c6c6752d2304c925f5d";
    const api_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&${api_key}`;

    let request = new XMLHttpRequest();
    const that = this;
    request.open('GET', api_url, true);
    request.onload = (response) => {
      if (request.status >= 200 && request.status < 400) {
        const res = JSON.parse(response.currentTarget.response);
        that.setState({city: res.name, lng: lng, lat:lat});
        let resp = request.responseText;
      }
    };

    request.onerror = function(err) {
      // There was a connection error of some sort
    };
    request.send();
  }

  unhideStep(step, e){
    e.preventDefault();
    const stepContainer = document.getElementById(step);
    stepContainer.classList.add('unhidden-step');
    stepContainer.classList.remove('hidden-step');
    window.setTimeout(()=>{
      window.scrollTo({left: 0, top: stepContainer.offsetTop, behavior: 'smooth'});
    }, 5);
    if (e.target.value === "") {
      e.target.style.display = "none";
    }else{
      e.target.children[e.target.children.length-1].style.display = "none";
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(){
    const startDateInputed = document.getElementById('start-date').value;
    const startTimeInputed = document.getElementById('start-time').value;
    const endDateInputed = document.getElementById('end-date').value;
    const endTimeInputed = document.getElementById('end-time').value;
    const startDate = Date(startDateInputed + " " + startTimeInputed);
    const endDate = Date(endDateInputed + " " + endTimeInputed);
    const event = {
      lng: this.state.lng || this.props.currentUser.lng,
      lat: this.state.lat || this.props.currentUser.lat,
      address: document.getElementById('address').value,
      title: document.getElementById('title').value,
      detail: document.getElementById('description').value,
      city: this.state.city,
      start_date: startDate,
      end_date: endDate,
      groupId: this.props.match.params.groupId
    };
    this.props.createEvent(event).then(res => {
      return this.props.history.push(`/events/${res.event.id}`);
    });

  }

  render(){
    const dateTime={startDate: this.state.startDate, endDate: this.state.endDate, startTime: this.state.startTime, endTime: this.state.endTime};
    return (
      <div className="events-form-page">
        <FormHeader/>
        <Step1 unhideStep={this.unhideStep} city={this.state.city} dateTime={dateTime} update={this.update}/>
        <Step2 unhideStep={this.unhideStep} interests={this.props.interests}/>
        <Step3 unhideStep={this.unhideStep}/>
        <Step4 handleSubmit={this.handleSubmit} loggedIn={this.props.loggedIn}/>
      </div>
    );
  }
}



const msp = (state, ownProps) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];

  return {
    loggedIn: Boolean(currUserId),
    currentUser: currentUser,
    interests: Object.values(state.entities.interests)
  };
};


const mdp = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
    fetchInterests: () => dispatch(fetchInterests()),
  };
};

const EventFormContainer = connect(msp, mdp)(EventForm);

export default EventFormContainer;
