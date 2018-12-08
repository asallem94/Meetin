import React from 'react';

class NewChatForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {chatUsers: ""};

  }

  update(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  closeModal(){
    document.getElementById('create-chat-modal').style.display = "none";
  }

  render(){
    return (
      <div id="create-chat-modal">
        <form className="create-chat-form">
          <h1>New Chat</h1>
          <section className="form-item">
            <label>
              Title
            </label>
            <input
              className="input-field"
              type="text"
            />
          </section>
          <section className="form-item">
            <label>
              Chat Members
            </label>
            <input
              className="input-field"
              type="text"
              onChange={this.update('chatUsers')}
              value={this.state.chatUsers}
            />
          </section>
          <section className="form-submit-section">
            <button className="chat-button" onClick={this.closeModal}>
              Cancel
            </button>
            <button className="chat-button" onClick={this.createChat}>
              Create Chat
            </button>

          </section>
        </form>
      </div>
    );
  }
}

export default NewChatForm;
