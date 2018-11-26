import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMyChats, createChat, fetchChat } from './../actions/messaging_actions';
import MessagesContainer from './messages_container';

class ChatsIndex extends React.Component {
  constructor(props){
    super(props);
    // debugger
    this.state = {selectedChat: null};
    this.selectChat = this.selectChat.bind(this);
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
  render(){
    const chats = this.props.chats.map((chat)=>{
      return (
        <div key={chat.id} className="chat-index-item" onClick={this.selectChat(chat.id)}>
          {chat.title}
        </div>
      );
    });
    return (
      <div className="chat-container">
        <div className="chat-index">
          {chats}
        </div>
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
  };
};

const ChatsContainer = connect(msp, mdp)(ChatsIndex);

export default ChatsContainer;
