import React from 'react';
import {logout} from '../../actions/auth_actions';
import {connect} from 'react-redux';
import Homepage from '../homepage'
import Navigation from '../navigation'

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const { loggedIn, currentUser, logout } = this.props;
    if (loggedIn){
     return(
       <nav>
       <h1>Hello {currentUser.email}!</h1>
       <button onClick={logout}>Logout</button>
       </nav>
     )
   }else{
     return (
       <div>
         <Navigation/>
      </div>
     )
   }
 }
}
// <Homepage/>


const msp = (state) => {
  const currUserId = state.session.currentUserId;
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

const GreetingContainer = connect(msp, mdp)(Greeting);
export default GreetingContainer
