import React from 'react';
import { connect } from 'react-redux';
import { createDiscussion } from './../actions/discussion_actions';
import { uniq } from 'lodash';

class NewDiscussionForm extends React.Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.createDiscussion = this.createDiscussion.bind(this);
  }

  createDiscussion(e){
    e.preventDefault();
    const topic = document.getElementById('discussion-topic').value;
    this.props.createDiscussion({topic: topic, groupId: this.props.groupId});
    this.closeModal(e);
  }

  closeModal(e){
    e.preventDefault();
    document.getElementById('discussion-topic').value = "";
    document.getElementById('create-form-modal').style.display = "none";
  }

  render(){
    return (
      <div id="create-form-modal">
        <form className="create-chat-form" onSubmit={this.createDiscussion}>
          <h1>New Discussion</h1>
          <section className="form-item">
            <label>
              Topic
            </label>
            <input
              // required
              id="discussion-topic"
              className="input-field"
              type="text"
            />
          </section>
          <section className="form-submit-section">
            <button className="chat-button clickable" onClick={this.closeModal}>
              Cancel
            </button>
            <input type="submit" className="chat-button clickable" onSubmit={this.createDiscussion} value="Create Discussion"/>
          </section>
        </form>
      </div>
    );
  }
}
// <button className="chat-button clickable" onClick={this.createDiscussion}>
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
    createDiscussion: (chat) => dispatch(createDiscussion(chat)),
    fetchUsers: (search) => dispatch(fetchUsers(search)),
  };
};

const DiscussionsFormContainer = connect(msp, mdp)(NewDiscussionForm);

export default DiscussionsFormContainer;
