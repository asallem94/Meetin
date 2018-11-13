import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/auth_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: "login"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user)=>dispatch(login(user))
  }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default LoginFormContainer;
