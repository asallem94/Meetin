import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from '../../../actions/meetin_actions';
import GenInfo from './group_show/gen_info';
import GroupDetail from './group_show/gen_info';
import GroupNavBarContainer from './group_show/group_nav_bar_container';
import { Route } from 'react-router';

class GroupShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  componentDidUpdate(prevParams) {
    if (prevParams.match.params.groupId !== this.props.match.params.groupId){
      this.props.fetchGroup(this.props.match.params.groupId);
    }
  }

  render(){
    return (
      <div className="groups-show-page">
        <GenInfo group={this.props.group} users={this.props.users}/>
        <GroupNavBarContainer group={this.props.group} currentUser={this.props.users[this.props.currUserId]}/>
        <GroupDetail group={this.props.group} users={this.props.users}/>
      </div>
    );
  }
}

const msp = (state, ownProp) => {
  const currUserId = state.session.currentUserId;
  return {
    currUserId: currUserId,
    group: state.entities.groups[ownProp.match.params.groupId] ,
    users: state.entities.users,
  };
};

const mdp = (dispatch) => {
  return {
    fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
  };
};

const GroupShowContainer = connect(msp, mdp)(GroupShow);

export default GroupShowContainer;
