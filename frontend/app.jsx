import React from 'react';
import NavigationContainer from './components/navigation_container';
import LoginFormContainer from './components/auth_components/login_form_container';
import SignupFormContainer from './components/auth_components/signup_form_container';
// import SessionForm from './components/auth_components/session_form';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ProtectedFromSplat} from './util/route_util';
import Homepage from './components/homepage';
import Footer from './components/footer/footer';
import Findpage from './components/findpage';
import GroupShow from './components/find_page_components/groups_components/groups_show_container';

const App = () => (
  <div className="route-wraper" >
    <header>
      <NavigationContainer/>
    </header>
    <ProtectedFromSplat exact path="/" component={Homepage}/>
    <ProtectedRoute exact path="/find" component={Findpage}/>
    <Route exact path="/groups/:groupId" component={GroupShow}/>
    <AuthRoute exact path="/login" component={LoginFormContainer}/>
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Footer/>
  </div>
);

export default App;

// <Navigaiton/>
// <Calendar/>
