import React from 'react';
import { connect } from 'react-redux';
import { createChat, fetchUsers } from './../actions/messaging_actions';
import { uniq } from 'lodash';

class NewChatForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {newChatUsers: "", usersResults:[], member_ids: []};
    this.displayDropdownResults = this.displayDropdownResults.bind(this);
    this.updateChatUsers = this.updateChatUsers.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.displayChatUsers = this.displayChatUsers.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createChat = this.createChat.bind(this);
  }

  createChat(e){
    e.preventDefault();
    let chatMembers = this.state.member_ids;
    chatMembers.push(this.props.currUserId);
    chatMembers = _.uniq(chatMembers);
    const title = document.getElementById('chat-title').value;
    this.props.createChat({member_ids: chatMembers, title: title});
    this.closeModal();
  }

  resetDropdown(){
    const searchChatUsers = this.state.newChatUsers;
    if (searchChatUsers.length > 1){
      this.props.fetchUsers(searchChatUsers);
      const searchResults = Object.values(this.props.users).filter(user => {
        return (
          user.id != (this.props.currUserId) &&
          !this.state.member_ids.includes(user.id) &&
          (user.name.toLowerCase().includes(searchChatUsers.toLowerCase()) ||
          (user.email ? user.email.toLowerCase().includes(searchChatUsers.toLowerCase()) : false))
        );
      });
      this.setState({usersResults: searchResults});
    } else {
      this.setState({usersResults: []});
    }
  }

  updateChatUsers(e){
    e.preventDefault();
    const currentChatUsers = e.target.value;
    this.setState({newChatUsers: currentChatUsers}, this.resetDropdown.bind(this));

  }

  selectUser(e){
    e.preventDefault();
    const newMemberIds = _.uniq(this.state.member_ids.concat(parseInt(e.currentTarget.id)));
    this.setState({newChatUsers: "", member_ids: newMemberIds }, this.resetDropdown);
  }

  displayDropdownResults(){
    return this.state.usersResults.map(user => {
      return (
        <section key={user.id} id={user.id} className="chat-dropdown-item" onClick={this.selectUser}>
          <img src={this.props.users[user.id].imgUrl} className="chat-img-circle"/>
          <div className="">
            <h5 className="chat-member-name">
              {user.name}
            </h5>
            <h4 className="member-email">
              {user.email}
            </h4>
          </div>
        </section>
      );
    });
  }

  displayChatUsers(){

    const newChatUsers = this.state.member_ids//_.uniq() //uniq elements

    return newChatUsers.map((userId) => {
      return (
        <section key={userId} className="selectUser-arg">
          <section className="selected-user">
            <img src={this.props.users[userId].imgUrl} className="chat-img-circle-selected"/>
            {this.props.users[userId].name}
          </section>
          <span>; </span>
        </section>
      );
    });
  }

  closeModal(){
    this.setState({newChatUsers: "", usersResults:[], member_ids: []});
    document.getElementById('chat-title').value = "";
    document.getElementById('create-chat-modal').style.display = "none";
  }

  render(){
    return (
      <div id="create-chat-modal">
        <form className="create-chat-form" onSubmit={this.createChat}>
          <h1>New Chat</h1>
          <section className="form-item">
            <label>
              Title
            </label>
            <input
              required
              id="chat-title"
              className="input-field"
              type="text"
            />
          </section>
          <section className="form-item">
            <label>
              Chat Members
            </label>
            <div className="dropdown">
            <div className="chat-users">
              {this.displayChatUsers()}
              <input
                className="chat-input-field"
                type="text"
                onChange={this.updateChatUsers}
                value={this.state.newChatUsers}
              />
            </div>
              <div className="dropdown-results">
                {this.displayDropdownResults()}
              </div>
            </div>
          </section>
          <section className="form-submit-section">
            <button className="chat-button clickable" onClick={this.closeModal}>
              Cancel
            </button>
            <input type="submit" className="chat-button clickable" onSubmit={this.createChat} value="Create Chat"/>
          </section>
        </form>
      </div>
    );
  }
}
// <button className="chat-button clickable" onClick={this.createChat}>
//   Create
// </button>

const msp = (state) => {
  const currUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currUserId];
  return {
    currUserId: currUserId,
    users: state.entities.users,
  };
};
// messages: state.entities.messages,


const mdp = (dispatch) => {
  return {
    createChat: (chat) => dispatch(createChat(chat)),
    fetchUsers: (search) => dispatch(fetchUsers(search)),
  };
};

const ChatsFormContainer = connect(msp, mdp)(NewChatForm);

export default ChatsFormContainer;
