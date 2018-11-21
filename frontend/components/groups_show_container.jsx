import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from './../actions/meetin_actions';
import GenInfo from './group_show/gen_info';
import GroupDetail from './group_show/group_detail';
import GroupMeetins from './group_show/group_meetins';
import GroupNavBarContainer from './group_show/group_nav_bar_container';
import { Route, Switch } from 'react-router';

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
    if ( !this.props.group ) {
      return null;
    }
    if ( !this.props.group.organizer_id ) {
      return null;
    }
    const passedProps = {group: this.props.group, users:this.props.users, events: this.props.events};
    return (
      <div className="groups-show-page">
        <GenInfo group={this.props.group} users={this.props.users} currUserId={this.props.currUserId}/>
        <GroupNavBarContainer group={this.props.group} currentUser={this.props.users[this.props.currUserId]}/>

        <Switch>

          <Route path="/groups/:groupId/meetins" render={
            () => <GroupMeetins {...passedProps}/>
          } />

          <Route exact path="/groups/:groupId/" render={
            () => <GroupDetail {...passedProps}/>
          } />

          <Route path="/groups/:groupId/members" render={
            () => <GroupMeetins {...passedProps}/>
          } />
        </Switch>
      </div>
    );
  }
}

// <GroupDetail group={this.props.group} users={this.props.users} events={this.props.events}/>
// <GroupMeetins events={this.props.events} group={this.props.group} users={this.props.users} />
const msp = (state, ownProp) => {
  const currUserId = state.session.currentUserId;
  return {
    currUserId: currUserId,
    group: state.entities.groups[ownProp.match.params.groupId] ,
    users: state.entities.users,
    events: state.entities.events,
  };
};

const mdp = (dispatch) => {
  return {
    fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
  };
};

const GroupShowContainer = connect(msp, mdp)(GroupShow);

export default GroupShowContainer;
