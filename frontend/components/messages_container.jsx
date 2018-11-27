import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchChat, createMessage, recieveMessage } from './../actions/messaging_actions';
import { ActionCable } from 'react-actioncable-provider';

class MessagesIndex extends React.Component {
  constructor(props){
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.displayMessages = this.displayMessages.bind(this);
    // this.scrollToLastMessage = this.scrollToLastMessage.bind(this);
  }

  // componentDidMount(){
  //   if (this.props.chatId){
  //     this.props.fetchChat(this.props.chatId);
  //   }
  // }
  componentDidUpdate(prevProps){
    if (this.props.chatId){
      if (this.props.chatId !== prevProps.chatId) {
        this.props.fetchChat(this.props.chatId).then(
          ()=>{
            const element = document.getElementById('message-index');
            element.scrollTop = element.scrollHeight;
          }
        );
      }
    }
  }

  sendMessage(e){
    e.preventDefault();
    const body = document.getElementById('message').value;
    this.props.createMessage({chat_id: this.props.chatId, author_id: this.props.currUserId, body: body}).then(
      ()=>{
        const element = document.getElementById('message-index');
        element.scrollTop = element.scrollHeight;
      }
    );
    // scroll to the last message
  }

  displayMessages(){
    return this.props.chats[this.props.chatId].messages_ids.map((messageId)=>{
      if (this.props.currUserId === this.props.messages[messageId].author_id) {
        return (
          <div key={messageId} className="message-index-item message-right">
            <h6 className="message-text">{this.props.messages[messageId].body}</h6>
          </div>

        );
      } else {
        return (
          <div key={messageId} className="message-index-item message-left">
            <img className="user-chat-img" src={this.props.users[this.props.messages[messageId].author_id].profile_img_url}/>
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
        <div id="message-index" className="message-index">
          {this.displayMessages()}
        </div>
        <form className="message-controller" onSubmit={this.sendMessage}>
          <input id="message" className="message-editor" type="text" required placeholder="Send message"/>
          <button className="message-sender" onClick={this.sendMessage}>
            <i className="fas fa-paper-plane">
            </i>
          </button>
        </form>
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
