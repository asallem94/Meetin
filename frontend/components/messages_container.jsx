import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchChat, createMessage, recieveMessage } from './../actions/messaging_actions';
import { ActionCable } from 'react-actioncable-provider';

class MessagesIndex extends React.Component {
  constructor(props){
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.displayMembers = this.displayMembers.bind(this);
    this.displayMessages = this.displayMessages.bind(this);
    this.scrollToLastMessage = this.scrollToLastMessage.bind(this);
  }

  // componentDidMount(){
  //   if (this.props.chatId){
  //     this.props.fetchChat(this.props.chatId);
  //   }
  // }
  componentDidUpdate(prevProps){
    if (this.props.chatId){
      if (this.props.chatId !== prevProps.chatId) {
        this.props.fetchChat(this.props.chatId);
      }
    }
    this.scrollToLastMessage();
  }
  checkLastMessage(){
    const bottomIndex = document.getElementById('message-index-bottom');
    if (bottomIndex) {
      if (bottomIndex.lastChild) {
        if (bottomIndex.lastChild.previousSibling) {
        }
      }
    }
  }

  isAtLastMessage() {
    const scrollDiv = document.getElementById('message-index-bottom').getBoundingClientRect();
    return (
      scrollDiv.top >= 0 &&
      scrollDiv.left >= 0 &&
      scrollDiv.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      scrollDiv.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
  }

  scrollToLastMessage(){
    const messageIndex = document.getElementById('message-index');
    // const messageIndexBottom = document.getElementById('message-index-bottom');
    if (messageIndex){

      messageIndex.scrollTo({left: 0, top: messageIndex.scrollHeight, behavior: 'smooth'});
      // element.scrollIntoView();
    }
  }
  sendMessage(e){
    const body = document.getElementById('message').value;
    document.getElementById('message').value = "";
    e.preventDefault();
    this.props.createMessage({chat_id: this.props.chatId, author_id: this.props.currUserId, body: body});
    // scroll to the last message
  }

  displayMembers(){
    return this.props.chats[this.props.chatId].member_ids.map(userId => {
      return (
        <img className="attendees-img-circle" key={userId} src={this.props.users[userId].imgUrl}/>
      );
    });
  }

  displayMessages(){
    const messageIds = this.props.chats[this.props.chatId].messages_ids;
    if (messageIds.length < 1){
      return (
        <div className="new-message">
          <h1 className="new-message-text">Say hi to {this.props.chats[this.props.chatId].title}</h1>
          <img className="new-message-icon" src="https://cdn.emojidex.com/emoji/seal/wave%28p%29.png?1426438608"/>
        </div>
      );
    }
    return messageIds.map((messageId)=>{
      if (this.props.currUserId === this.props.messages[messageId].author_id) {
        return (
          <div key={messageId} className="message-index-item message-right">
            <h6 className="message-text">{this.props.messages[messageId].body}</h6>
          </div>

        );
      } else {
        return (
          <div key={messageId} className="message-index-item message-left">
            <img className="user-chat-img" src={this.props.users[this.props.messages[messageId].author_id].imgUrl}/>
            <h6 className="message-text">{this.props.messages[messageId].body}</h6>
          </div>
        );
      }

    });
  }
  render(){
    if (!this.props.chatId){
      return null;
    }
    if (!this.props.chats[this.props.chatId].messages_ids){
      return null;
    }

    return (
      <div className="message-container">
        <div>
          <h1 className="message-chat-title">{this.props.chats[this.props.chatId].title}</h1>
          <div className="message-chat-members">
          {this.displayMembers()}
          </div>
        </div>
        <div id="message-index" className="message-index">
          {this.displayMessages()}
        </div>
        <form className="message-controller" onSubmit={this.sendMessage}>
          <input id="message" className="message-editor" type="text" required placeholder="Send message"/>
          <section className="message-sender clickable" onClick={this.sendMessage}>
            <i className="fas fa-paper-plane send-icon">
            </i>
          </section>
        </form>
      </div>
    );

  }
}
// <div id="message-index-bottom"></div>

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    currUserId: currUserId,
    chats: state.entities.chats,
    messages: state.entities.messages,
    users: state.entities.users
  };
};


const mdp = (dispatch) => {
  return {
    createMessage: (chat) => dispatch(createMessage(chat)),
    fetchChat: (id) => dispatch(fetchChat(id)),
    recieveMessage: (message) => dispatch(recieveMessage(message))
  };
};

const MessagesContainer = connect(msp, mdp)(MessagesIndex);

export default MessagesContainer;
