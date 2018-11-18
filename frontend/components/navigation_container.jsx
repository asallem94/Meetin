import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from './../actions/auth_actions';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.loggedIn = this.loggedIn.bind(this)
  }

  loggedIn(){
    const user = this.props.currentUser;
    // debugger
    return (
      <>
        <Link to="/find" className="auth-item">Explore</Link>
        <Link to="/find" className="auth-item">Messages</Link>
        <ul className="dropdown">

          <img className="profile-circle" src={user.profile_img_url}></img>
          <div className="dropdown-container">
            <ul className="myGroups-dropdown">
            </ul>
            <ul className="account-actions-dropdown">
              <li className="account-actions">
                Profile
              </li>
              <li className="account-actions nav-center-item">
                Settings
              </li>
              <li className="account-actions" onClick={() => this.props.logout()}>
                Log out
              </li>
            </ul>
          </div>
        </ul>
      </>
    );
  }
  // <img className="auth-item">Notifications</img>

  notLoggedIn(){
    return (
      <>
        <Link to="/signup" className="auth-item">Sign up</Link>
        <Link to="/login"className="auth-item">Log in</Link>
      </>
    );
  }
  render(){
    const { loggedIn, currentUser, logout } = this.props;
    return (
      <div className="navigation-container">
        <Link to="/" className="logo">Meetin</Link>
      <div className="nav-menu">
        <Link to="/create" className="new-group-button">Start a new Group</Link>
        {
          (loggedIn) ? this.loggedIn() : this.notLoggedIn()
        }

      </div>
      </div>
    );
  }
};

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  // debugger
  return {
    loggedIn: Boolean(currUserId),
    currentUser: state.entities.users[currUserId]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

const NavigationContainer = connect(msp, mdp)(Navigation);
export default NavigationContainer;
