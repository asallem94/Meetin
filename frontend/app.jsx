import React from 'react';
import NavigationContainer from './components/navigation_container';
import LoginFormContainer from './components/auth_components/login_form_container';
import SignupFormContainer from './components/auth_components/signup_form_container';
// import SessionForm from './components/auth_components/session_form';
import { Route } from 'react-router-dom';
import { AuthRoute } from './util/route_util';
import Homepage from './components/homepage';
import Footer from './components/footer/footer';

const App = () => (
  <div>
    <header>
      <NavigationContainer/>
      <Route exact path="/" component={Homepage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </header>
    <Footer/>
  </div>
);

export default App;

// <Navigaiton/>
// <Calendar/>
