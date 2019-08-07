import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMyChats, fetchChat, recieveMessage, d } from './../actions/messaging_actions';
import MessagesContainer from './messages_container';
import { ActionCable } from 'react-actioncable-provider';
import ChatsFormContainer from './create_chat_modal';
import Moment from 'moment';

class ChatsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedChat: null };
    this.selectChat = this.selectChat.bind(this);
    this.displayChats = this.displayChats.bind(this);
    this.scrollToLastMessage = this.scrollToLastMessage.bind(this);
    this.displayChatsModal = this.displayChatsModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllMyChats().then((res) => {
      if (res.chats) {
        this.setState({ selectedChat: Object.values(res.chats)[0].id });
      }
    });
  }

  selectChat(id) {
    return (e) => {
      e.preventDefault();
      this.setState({ selectedChat: id });
    };
  }

  scrollToLastMessage() {
    const element = document.getElementById('message-index');
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }

  displayChats() {
    const currUser = this.props.users[this.props.currUserId];
    if (this.props.users[this.props.currUserId].chatIds.length < 1) {
      return null;
    }
    if (!this.props.chats[currUser.chatIds[0]]) {
      return null;
    }
    // .chatIds.sort(
    //   (id1, id2)=>{
    //     const chat1 = this.props.chats[id1];
    //     const chat2 = this.props.chats[id2];
    //     return chat1
    //   }
    // )
    return currUser.chatIds.map((chatId) => {
      const chat = this.props.chats[chatId];
      return (
        <div key={chat.id} className="chat-index-item clickable" onClick={this.selectChat(chat.id)}>

          <ActionCable
            channel={{ channel: 'MessagesChannel', id: chat.id }}
            onReceived={this.props.recieveMessage}
          />
          <section className="message-text-header">
            <h3>{chat.title}</h3>
            <h3>{chat.lastMessageId ? Moment(this.props.messages[chat.lastMessageId].created_at).fromNow() : ""}</h3>
          </section>

          <h3 className="ellipsis">{chat.lastMessageId ? this.props.messages[chat.lastMessageId].body : ""}</h3>
        </div>
      );
    });
  }

  displayChatsModal(e) {
    e.preventDefault();
    this.openModal();
  }

  openModal() {
    document.getElementById('create-form-modal').style.display = "flex";
  }

  render() {
    if (!this.props.chats) {
      return null;
    }

    return (
      <div className="background-container">
        <div className="chat-container">
          <ChatsFormContainer />
          <section className="chats-section">
            <div className="chat-index">
              {this.displayChats()}
            </div>
            <button className="create-form clickable" onClick={this.displayChatsModal}>
              New chat
            </button>
          </section>
          <MessagesContainer chatId={this.state.selectedChat} />
        </div>
      </div>
    );

  }
}

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    currUserId: currUserId,
    chats: state.entities.chats,
    users: state.entities.users,
    messages: state.entities.messages,
  };
};
// messages: state.entities.messages,

const mdp = (dispatch) => {
  return {
    fetchAllMyChats: () => dispatch(fetchAllMyChats()),
    fetchChat: (id) => dispatch(fetchChat(id)),
    recieveMessage: (id) => dispatch(recieveMessage(id)),
  };
};

const ChatsContainer = connect(msp, mdp)(ChatsIndex);

export default ChatsContainer;
