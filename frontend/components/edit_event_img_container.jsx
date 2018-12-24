import React from 'react';
import { connect } from 'react-redux';
import { updateEvent } from '../actions/event_actions';
import EditImage from './edit_forms/edit_image';

const msp = (state, ownProps) => {
  const currUserId = state.session.currentUserId;
  return {
    currUserId: currUserId,
  };
};


const mdp = (dispatch) => {
  return {
    updateEntity: (event) => dispatch(updateEvent(event))
  };
};

const EditEventImageContainer = connect(msp, mdp)(EditImage);
export default EditEventImageContainer;
