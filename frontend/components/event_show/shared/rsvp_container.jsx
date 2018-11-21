import React from 'react';
import { connect } from 'react-redux';
import { createEventResponse, updateEventResponse } from './../../../actions/rsvp_actions';

class RsvpButtons extends React.Component{
  constructor(props){
    super(props);
    this.displayJoinEventContainer = this.displayJoinEventContainer.bind(this);
    this.rsvpContainer = this.rsvpContainer.bind(this);
    this.displayAttendButton = this.displayAttendButton.bind(this);
    this.displayDeclineButton = this.displayDeclineButton.bind(this);
    this.handleRSVP = this.handleRSVP.bind(this);
  }

  displayJoinEventContainer(event, currentUser){
    // if currentUser
    if (!currentUser.events) {
      //render both buttons
        return this.rsvpContainer(true, true, "create");
    } else {
      if (currentUser.events[event.id] === undefined){
        //render both buttons
        return this.rsvpContainer(true, true, "create");
      }
      if (currentUser.events[event.id].going){
        //render not attending(X)
        return this.rsvpContainer(false, true, "update");
      } else {
        // render attending(Check)
        return this.rsvpContainer(true, false, "update");
      }
    }
  }

  displayAttendButton(attend_button, fetchType, replied){
    if (attend_button) {
      return (
        <section className="rsvp_button" onClick={this.handleRSVP(fetchType, true)}>
          {replied ? "ATTEND" : <i className="fas fa-check"></i>}
        </section>
      );
    }
    return null;
  }
  displayDeclineButton(decline_button, fetchType, replied){
    if (decline_button) {
      return (
        <section className="rsvp_button" onClick={this.handleRSVP(fetchType, false)}>
          {replied ? "DECLINE" : <i className="fas fa-times"></i>}
        </section>
      );
    }
    return null;
  }
  rsvpContainer(attend_button, decline_button, fetchType){
    return (
        <div className="rsvp-container">
          { this.displayAttendButton(attend_button, fetchType, !decline_button) }
          { this.displayDeclineButton(decline_button, fetchType, !attend_button) }
        </div>
    );
  }

  handleRSVP(fetchType, going){
    const sendRSVP = (e) => {
      e.preventDefault()
      if (fetchType === "update") {
        this.props.updateEventResponse({
          rsvp: going,
          event_id: this.props.event.id,
          user_id: this.props.currentUser.id,
          id: this.props.currentUser.events[this.props.event.id].rsvpId
        });
      } else {
        this.props.createEventResponse({
          rsvp: going,
          event_id: this.props.event.id,
          user_id: this.props.currentUser.id
        });
      }
    };

    return sendRSVP.bind(this);
  }
  render(){
    return (
      this.displayJoinEventContainer(this.props.event, this.props.currentUser)
    );
  }
}

const msp = (state, ownProps) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    currentUser: currentUser,
  };
};

const mdp = (dispatch) => {
  return {
    createEventResponse: (rsvp) => dispatch(createEventResponse(rsvp)),
    updateEventResponse: (rsvp) => dispatch(updateEventResponse(rsvp))
  };
};

const RsvpContainer = connect(msp, mdp)(RsvpButtons);
export default RsvpContainer;
