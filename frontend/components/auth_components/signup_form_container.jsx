import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/auth_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: "signup"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user)=>dispatch(signup(user))
  }
}

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignupFormContainer;
