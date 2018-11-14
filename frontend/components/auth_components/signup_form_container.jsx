import React from 'react';
import { connect } from 'react-redux';
import UserForm from './user_form';
import { signup } from '../../actions/auth_actions';
import { login } from '../../actions/auth_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: "signup"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user)=>dispatch(signup(user)),
    login: (user)=>dispatch(login(user))
  }
}

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(UserForm);
export default SignupFormContainer;
