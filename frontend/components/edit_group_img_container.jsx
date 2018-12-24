import React from 'react';
import { connect } from 'react-redux';
import { updateGroup } from '../actions/meetin_actions';
import EditImage from './edit_forms/edit_image';

const msp = (state, ownProps) => {
  const currUserId = state.session.currentUserId;

  return {
    currUserId: currUserId,
  };
};


const mdp = (dispatch) => {
  return {
    // createEvent: (event) => dispatch(createEvent(event))
    updateEntity: (group) => dispatch(updateGroup(group))
  };
};

const EditGroupImageContainer = connect(msp, mdp)(EditImage);
export default EditGroupImageContainer;
