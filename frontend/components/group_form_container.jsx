

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
  }

  componentDidMount(){
    if (!this.props.loggedIn) {
      this.handleChangeLocaiton();
    }
    this.props.fetchInterests();
  }

  handleChangeLocaiton(){
    const handleCoords = (location) => this.location ={
      lat: location.coords.latitude,
      lng: location.coords.longitude
    };
    navigator.geolocation.getCurrentPosition(handleCoords);
  }

  unhideStep(step, e){
    const stepContainer = document.getElementById(step);
    stepContainer.classList.add('unhidden-step');
    stepContainer.classList.remove('hidden-step');

    e.target.style.display = "none";
  }

  handleSubmit(){
    group = {
      lng: this.location.lng || currentUser.lng,
      lat: this.location.lat || currentUser.lat,
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      city: document.getElementById('city').value,
    };
    this.props.createGroup(group);

  }

  render(){
    return (
      <div className="groups-form-page">
        <FormHeader/>
        <Step1 unhideStep={this.unhideStep}/>
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
