import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { joinGroup, unjoinGroup } from '../../actions/membership_actions';

class GroupNavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleUnjoin = this.handleUnjoin.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }
  handleUnjoin(){
    this.props.unjoinGroup(this.props.currentUser.groups[this.props.group.id]);
  }
  handleJoin(){
    this.props.joinGroup(this.props.group.id);
  }
  render(){
    if (!this.props.group){
      return null;
    }

    let joined = false;
    if (this.props.currentUser.groups) {
      if (this.props.currentUser.groups[this.props.group.id]) {
        joined = true;
      }
    }

    return (
      <div className="group-menu-bar-div">
        <div className="row">
          <ul className="group-menu-bar">
            <Link to={`/groups/${this.props.group.id}/`}><li className="group-menu-item">About</li></Link>
            <Link to={`/groups/${this.props.group.id}/meetins`}><li className="group-menu-item">Meetins</li></Link>
            <Link to={`/groups/${this.props.group.id}/discussions`}><li className="group-menu-item">Discussions</li></Link>
            <button className="join-unjoin-button clickable" onClick={(joined ? this.handleUnjoin : this.handleJoin)}>{joined ? "Leave this group" : "Join this group"}</button>
          </ul>
        </div>
      </div>
    );
  }
}

// <Link to="/" exact><li className="group-menu-item">Photos</li></Link>
// <Link to="/"><li className="group-menu-item">Discussions</li></Link>
const msp = (state) => {
  const currUserId = state.session.currentUserId;
  return {
    currUserId: currUserId,
  };
};


const mdp = (dispatch) => {
  return {
    joinGroup: (groupId) => dispatch(joinGroup(groupId)),
    unjoinGroup: (membershipId) => dispatch(unjoinGroup(membershipId)),
  };
};

const GroupNavBarContainer = connect(msp, mdp)(GroupNavBar);

export default GroupNavBarContainer;


// export default GroupNavBar;
