import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];

  return {
    currentUser: currentUser,
    groups: state.entities.groups,
    events: state.entities.events,
    // interests:

  };
};

const mdp = (dispatch) => {
  return {

  };
};

const NavigationContainer = connect(msp, mdp)(Navigation);
export default NavigationContainer;
