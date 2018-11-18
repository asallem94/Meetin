import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from './../actions/meetin_actions';
import GenInfo from './group_show/gen_info';
import GroupDetail from './group_show/group_detail';
import GroupNavBarContainer from './group_show/group_nav_bar_container';
import { Route, Switch } from 'react-router-dom';

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
        <GroupDetail group={this.props.group} users={this.props.users} />
      </div>
    );
  }
}
// <Switch>
// <Route exact path="/" component={GroupDetail} group={this.props.group} users={this.props.users} />
// <Route exact path="/meetins" component={GroupDetail} group={this.props.group} users={this.props.users} />
// </Switch>

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
