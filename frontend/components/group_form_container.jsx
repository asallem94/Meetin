

import React from 'react';
import { connect } from 'react-redux';
import { createGroup, fetchInterests } from './../actions/meetin_actions';
import GenInfo from './group_show/gen_info';
import { Route } from 'react-router-dom';
import FormHeader from './group_form/form_header';
import Step1 from './group_form/step1';
import Step2 from './group_form/step2';
import Step3 from './group_form/step3';
import Step4 from './group_form/step4';
import UserForm from './auth_components/user_form';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    this.unhideStep = this.unhideStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCoordinates = this.handleCoordinates.bind(this);
    this.handleChangeLocaiton = this.handleChangeLocaiton.bind(this);
    this.state = {city: "", lng: this.props.currentUser.lng, lat: this.props.currentUser.lat};
  }

  componentDidMount(){
    if (this.state.lng && this.state.lat){
      this.handleCoordinates();
    }else{
      this.handleChangeLocaiton();
    }
    this.props.fetchInterests();
  }

  handleChangeLocaiton(){
    const handleCoords = (location) => {
      this.setState({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }, this.handleCoordinates);
    };
    navigator.geolocation.getCurrentPosition(handleCoords);
  }
  handleCoordinates(){
    const lat = this.state.lat;
    const lng = this.state.lng;
    const api_key = "APPID=6c47a97e3a341c6c6752d2304c925f5d";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&${api_key}`;

    let request = new XMLHttpRequest();
    const that = this;
    request.open('GET', api_url, true);
    request.onload = (response) => {
      if (request.status >= 200 && request.status < 400) {
        const res = JSON.parse(response.currentTarget.response);
        that.setState({city: res.name});
        let resp = request.responseText;
      }
    };

    request.onerror = function(err) {
      // There was a connection error of some sort
    };
    request.send();
  }

  unhideStep(step, e){
    const stepContainer = document.getElementById(step);
    stepContainer.classList.add('unhidden-step');
    stepContainer.classList.remove('hidden-step');
    window.setTimeout(()=>{
      window.scrollTo({left: 0, top: stepContainer.offsetTop, behavior: 'smooth'});
    }, 5);
    e.target.style.display = "none";
  }

  handleSubmit(){

    const interestNodeList = document.querySelectorAll("input.interest-checkbox:checked");
    const interestIds = [];
    for (let i = 0; i < interestNodeList.length; i++) {
      interestIds.push(interestNodeList[i].id);
    }


    const group = {
      lng: this.state.lng || this.props.currentUser.lng,
      lat: this.state.lat || this.props.currentUser.lat,
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      city: this.state.city,
      interestIds: interestIds
    };
    this.props.createGroup(group).then(res => {
      return this.props.history.push(`/groups/${res.group.id}`);
    });

  }

  render(){
    return (
      <div className="groups-form-page">
        <FormHeader/>
        <Step1 unhideStep={this.unhideStep} handleChangeLocaiton={this.handleChangeLocaiton} city={this.state.city}/>
        <Step2 unhideStep={this.unhideStep} interests={this.props.interests}/>
        <Step3 unhideStep={this.unhideStep}/>
        <Step4 handleSubmit={this.handleSubmit} loggedIn={this.props.loggedIn}/>
      </div>
    );
  }
}



const msp = (state) => {
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
    createGroup: (group) => dispatch(createGroup(group)),
    fetchInterests: () => dispatch(fetchInterests()),
  };
};

const GroupFormContainer = connect(msp, mdp)(GroupForm);

export default GroupFormContainer;
