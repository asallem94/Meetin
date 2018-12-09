import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMyChats, createChat, fetchChat, recieveMessage } from './../actions/messaging_actions';
import MessagesContainer from './messages_container';
import { ActionCable } from 'react-actioncable-provider';
import NewChatForm from './create_chat_modal'

class ChatsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedChat: null};
    this.selectChat = this.selectChat.bind(this);
    this.displayChats = this.displayChats.bind(this);
    this.scrollToLastMessage = this.scrollToLastMessage.bind(this);
    this.displayChatsModal = this.displayChatsModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllMyChats();
  }

  selectChat(id){
    return (e) => {
      e.preventDefault();
      this.setState({selectedChat: id});
    };
  }

  scrollToLastMessage(){
    const element = document.getElementById('message-index');
    if (element){
      element.scrollTop = element.scrollHeight;
    }
  }

  displayChats(){
    return this.props.chats.map((chat)=>{
      return (
        <div key={chat.id} className="chat-index-item clickable" onClick={this.selectChat(chat.id)}>
          <ActionCable
            channel={{ channel: 'MessagesChannel', id: chat.id}}
            onReceived={this.props.recieveMessage}
          />
          {chat.title}
        </div>
      );
    });
  }

  createChat(){

    debugger
    // this.props.createChat(chat);
  }

  displayChatsModal(e){
    e.preventDefault();
    this.openModal();
  }

  openModal(){
    document.getElementById('create-chat-modal').style.display = "flex";
  }

  render(){
    if (!this.props.chats) {
      return null;
    }

    return (
      <div className="chat-container">
        <NewChatForm/>
        <section className="chats-section">
          <div className="chat-index">
            {this.displayChats()}
          </div>
          <button className="create-chat clickable" onClick={this.displayChatsModal}>
            New chat
          </button>
        </section>
        <MessagesContainer chatId={this.state.selectedChat} />
      </div>
    );

  }
}

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    currUserId: currUserId,
    chats: Object.values(state.entities.chats),
    messages: state.entities.messages,
    users: state.entities.users
  };
};


const mdp = (dispatch) => {
  return {
    fetchAllMyChats: () => dispatch(fetchAllMyChats()),
    createChat: (chat) => dispatch(createChat(chat)),
    fetchChat: (id) => dispatch(fetchChat(id)),
    recieveMessage: (id) => dispatch(recieveMessage(id)),
  };
};

const ChatsContainer = connect(msp, mdp)(ChatsIndex);

export default ChatsContainer;
