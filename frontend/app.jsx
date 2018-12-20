import React from 'react';
import NavigationContainer from './components/navigation_container';
import LoginFormContainer from './components/auth_components/login_form_container';
import SignupFormContainer from './components/auth_components/signup_form_container';
// import SessionForm from './components/auth_components/session_form';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ProtectedFromSplat, AuthEventCreatorRoute} from './util/route_util';
import Homepage from './components/homepage';
import Footer from './components/footer/footer';
import Findpage from './components/findpage';
import GroupShowContainer from './components/groups_show_container';
import EventsShowContainer from './components/events_show_container';
import GroupFormContainer from './components/group_form_container';
import EventFormContainer from './components/event_form_container';
import ChatsContainer from './components/chats_container';
import ProfileContainer from './components/profile_container';
// import CssTests from './css_tests';

const App = () => {
  return (
    <div className="route-wraper" >
      <header>
        <NavigationContainer/>
      </header>
      <Switch>
        <ProtectedFromSplat exact path="/" component={Homepage}/>
        <ProtectedRoute exact path="/find" component={Findpage}/>
        <ProtectedRoute path="/groups/:groupId" component={GroupShowContainer}/>
        <ProtectedRoute exact path="/messaging" component={ChatsContainer}/>
        <AuthEventCreatorRoute exact path="/events/:groupId/new" component={EventFormContainer}/>
        <ProtectedRoute exact path="/events/:eventId" component={EventsShowContainer}/>
        <ProtectedRoute exact path="/create" component={GroupFormContainer}/>
        <ProtectedRoute exact path="/users/:userId" component={ProfileContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
      <Footer/>
    </div>
  );
  // <Route exact path="/trials" component={CssTests} />
};

export default App;

// <Navigaiton/>
// <Calendar/>
