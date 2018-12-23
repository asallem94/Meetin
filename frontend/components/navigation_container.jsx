import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from './../actions/auth_actions';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.loggedIn = this.loggedIn.bind(this)
  }


  myGroups(){
    const myGroups = this.props.groups
      .filter((group)=>currentUser.groups[group.id])
      .map((group) => {
        <li className="myGroup" key="group_id">
          {group.title}
        </li>
      })

  }

  loggedIn(){
    const user = this.props.currentUser;
    return (
      <>
        <Link to="/find" className="auth-item">Explore</Link>
        <Link to="/messaging" className="auth-item">Messages</Link>
        <ul className="dropdown" tabIndex="123">
          <img className="profile-circle clickable" src={user.imgUrl}></img>
          <div className="dropdown-container">
            <ul className="myGroups-dropdown">
            </ul>
            <ul className="account-actions-dropdown">
              <Link to={`/users/${user.id}`}>
                <li className="account-actions">
                  Profile
                </li>
              </Link>
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
  const currentUser = state.entities.users[currUserId];

  return {
    loggedIn: Boolean(currUserId),
    currentUser: currentUser,
    groups: state.entities.groups
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

const NavigationContainer = connect(msp, mdp)(Navigation);
export default NavigationContainer;
