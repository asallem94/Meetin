import * as EventAPIUtil from "../util/event_api_util";

export const RECEIVE_FINDABLE_EVENTS = "RECEIVE_FINDABLE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

const receiveFindableEvents = ({events, users}) => {

  return {
    type: RECEIVE_FINDABLE_EVENTS,
    events,
    users,
  };
};

const receiveEvent = ({event, users}) => {
  return {
    type: RECEIVE_EVENT,
    event,
    users
  };
};

export const fetchFindableEvents = (filters) => {
  return (dispatch) => {
    return EventAPIUtil.fetchFindableEvents(filters).then((response)=>{
      return dispatch(receiveFindableEvents(response));
    });
  };
};

export const fetchEvent = (id) => {
  return (dispatch) => {
    return EventAPIUtil.fetchEvent(id).then((response)=>{
      return dispatch(receiveEvent(response));
    });
  };
};

export const createEvent = (event) => {
  return (dispatch) => {
    return EventAPIUtil.createEvent(event).then((response)=>{
      return dispatch(receiveEvent(response));
    });
  };
};

export const updateEvent = (event) => {
  return (dispatch) => {
    return EventAPIUtil.updateEvent(event).then((response)=>{
      return dispatch(receiveEvent(response));
    });
  };
};
