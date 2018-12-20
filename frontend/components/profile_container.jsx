import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchUser } from './../actions/auth_actions';
import EventDatePost from './event_show/shared/event_date_post';

class ProfileShow extends React.Component {
  constructor(props){
    super(props);
    this.displayEventsByType = this.displayEventsByType.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId ){
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  displayHeader(){
    return (
        <div className="row profile-header">
          <div className="container2">
            <div className="profile-header-main">
              <img className="profile-img" src={this.props.showUser.profile_img_url} />
              <h2>{this.props.showUser.name}</h2>
            </div>
            {this.displayInterests()}
          </div>
        </div>
    );
  }
  displayInterests(){

    const interestIds = this.props.showUser.interestIds;
    if (!interestIds || interestIds.length < 1 || !this.props.interests[interestIds[0]]){
      return null;
    }
    const interests = interestIds.map((interestId)=>{
      const interest = this.props.interests[interestId];
      return (
        <div key={interestId} className="clickable interest-item">
          <h2 className="title-overlay">{interest.topic_titles}</h2>
          <img className="interest-img" src={interest.picture_url}/>
        </div>
      );
    });
    return (
      <div className="row">
        <h1>My Interests</h1>
        <div className="container">
          {interests}
        </div>
      </div>
    );
  }
  displayGroups(){
    if (!this.props.showUser.groups){
      return null;
    }
    const groupIds = Object.keys(this.props.showUser.groups);
    if (groupIds.length < 1 || !this.props.groups[groupIds[0]]){
      return null;
    }
    // debugger
    const groups = groupIds.map((groupId)=>{
      const group = this.props.groups[groupId];
      return (
        <Link to={`/groups/${groupId}`} key={groupId} className="clickable profile-item">
          <h2 className="tl-pos title-overlay">{group.title}</h2>
          <img className="image-on-profile" src={group.img_url}/>
        </Link>
      );
    });
    return (
      <div className="row">
      <h1>My Groups</h1>
        <div className="container">
        {groups}
        </div>
      </div>
    );
  }

  displayEventsByType(eventIds, type){
    const events = eventIds.map((eventId)=>{
      const event = this.props.events[eventId];
      return (
        <Link to={`/events/${eventId}`} key={eventId} className="clickable profile-item">
          <div className="tl-pos">
            <EventDatePost start_date={event.start_date}/>
            <h2 className="title-overlay">{event.title}</h2>
          </div>
          <img className="image-on-profile" src={event.event_img_url}/>
        </Link>
      );
    });
    return (
      <div className="row">
        <h1>{type}</h1>
        <div className="container">
          {events}
        </div>
      </div>
    );
  }

  displayEvents(){
    if (!this.props.showUser.events){
      return null;
    }
    const myEventIds = Object.keys(this.props.showUser.events);
    const memories = [];
    const upcomingEvents = [];
    const now = new Date();
    if (myEventIds.length > 0) {
      if (!myEventIds[0]) {
        return null;
      }
    }
    if (!this.props.events[myEventIds[0]]){
      return null;
    }
    for (let i = 0; i < myEventIds.length; i++) {
      if (this.props.showUser.events[myEventIds[i]].going){
        if (new Date(this.props.events[myEventIds[i]].start_date) > now){
          upcomingEvents.push(myEventIds[i]);
        } else {
          memories.push(myEventIds[i]);
        }
      }
    }
    return (
      <div>
      {upcomingEvents.length > 0 ? this.displayEventsByType(upcomingEvents, "Ucoming Events") : null}
      {memories.length > 0 ? this.displayEventsByType(memories, "Memories") : null}
      </div>
    );
  }
  render(){
    if (!this.props.showUser){
      return null;
    }
    return (
      <div className="content-container">
        {this.displayHeader()}
        {this.displayGroups()}
        {this.displayEvents()}
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  const showUser = state.entities.users[ownProps.match.params.userId];
  return {
    showUser: showUser,
    groups: state.entities.groups,
    events: state.entities.events,
    interests: state.entities.interests,

    // interests:

  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id)=>dispatch(fetchUser(id))
  };
};

const ProfileContainer = connect(msp, mdp)(ProfileShow);
export default ProfileContainer;
