import * as RsvpAPIUtil from '../util/rsvp_api_util';

export const RECEIVE_RSVP = "RECEIVE_RSVP";

const receiveRsvp = ({rsvp, events}) => {
  return {
    type: RECEIVE_RSVP,
    rsvp,
    events
  };
};

export const createEventResponse = (rsvp) => {
  return (dispatch) => {
    return RsvpAPIUtil.createEventResponse(rsvp).then((response)=>{
      return dispatch(receiveRsvp(response));
    });
  };
};

export const updateEventResponse = (rsvp) => {
  return (dispatch) => {
    return RsvpAPIUtil.updateEventResponse(rsvp).then((response)=>{
      return dispatch(receiveRsvp(response));
    });
  };
};
