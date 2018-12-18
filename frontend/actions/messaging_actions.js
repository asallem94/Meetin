import * as MessagingAPIUtil from '../util/messaging_api_util';

export const RECEIVE_ALL_CHATS = "RECEIVE_ALL_CHATS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";
export const RECIEVE_MESSAGE = "RECIEVE_MESSAGE";
export const RECIEVE_USERS = "RECIEVE_USERS";

const receiveAllChats = ({chats, messages}) => {
  // debugger
  return {
    type: RECEIVE_ALL_CHATS,
    chats,
    messages
  };
};

export const receiveChat = ({chats, messages, users}) => {
  return {
    type: RECEIVE_CHAT,
    chats,
    messages,
    users
  };
};

export const recieveMessage = ({message, chats}) => {
  return {
    type: RECIEVE_MESSAGE,
    message
  };
};

const recieveUsers = (users) => {
  return {
    type: RECIEVE_USERS,
    users
  };
};

export const fetchAllMyChats = () => {
  return (dispatch) => {
    return MessagingAPIUtil.fetchAllMyChats().then((response)=>{
      return dispatch(receiveAllChats(response));
    });
  };
};

export const fetchChat = (id) => {
  return (dispatch) => {
    return MessagingAPIUtil.fetchChat(id).then((response)=>{
      return dispatch(receiveChat(response));
    });
  };
};

export const createChat = (chat) => {
  return (dispatch) => {
    return MessagingAPIUtil.createChat(chat).then((response)=>{
      return dispatch(receiveChat(response));
    });
  };
};

export const createMessage = (message) => {
  return (dispatch) => {
    return MessagingAPIUtil.createMessage(message).then((response)=>{
      return dispatch(recieveMessage(response));
    });
  };
};

export const fetchUsers = (filter) => {
  return (dispatch) => {
    return MessagingAPIUtil.fetchUsers(filter).then((response)=>{
      return dispatch(recieveUsers(response));
    });
  };
};
