import React from 'react';
import { connect } from 'react-redux';
import UserForm from './user_form';
import { signup, login, receiveErrors } from '../../actions/auth_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: "signup"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: (errors)=>dispatch(receiveErrors(errors)),
    signup: (user)=>dispatch(signup(user)),
    login: (user)=>dispatch(login(user))
  };
};

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(UserForm);
export default SignupFormContainer;
