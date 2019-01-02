import React from 'react';
import { connect } from 'react-redux';
import { fetchDiscussions, fetchDiscussion } from './../actions/discussion_actions';
import DiscussionsFormContainer from './create_discussion_modal';
import Moment from 'moment';
import NoDiscussions from './group_show/no_discussions';
import { Link } from 'react-router-dom';

class DiscussionsIndex extends React.Component {
  constructor(props){
    super(props);
    this.displayDiscussions = this.displayDiscussions.bind(this);
    this.displayDiscussionsModal = this.displayDiscussionsModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchDiscussions(this.props.group.id);
  }

  displayDiscussions(){
    const discussionIds = this.props.group.discussionIds;
    if (!discussionIds[discussionIds.length-1] || !discussionIds[0] || !this.props.discussions[discussionIds[0]] || !this.props.discussions[discussionIds[discussionIds.length-1]]){
      return null;
    }
    const sortedDiscussionIds = discussionIds.sort(
      (id1, id2)=>{
        const discussion1 = this.props.discussions[id1];
        const discussion2 = this.props.discussions[id2];
        return new Date(discussion1.created_at) < new Date(discussion2.created_at);
      }
    );

    return sortedDiscussionIds.map((discussionId)=>{
      const discussion = this.props.discussions[discussionId];
      return (
        <Link to={`/discussions/${discussionId}`} key={discussion.id} className="nonlink">
          <div className="discussion-index-item hovered-content">
            <section className="message-text-header">
              <h3 className="ellipsis">{discussion.topic}</h3>
              <h3>{Moment(new Date(discussion.created_at)).fromNow()}</h3>
            </section>

            <h3 className="ellipsis">{discussion.lastMessageId ? this.props.messages[discussion.lastMessageId].body : "" }</h3>
          </div>
        </Link>
      );
    });
  }

  displayDiscussionsModal(e){
    e.preventDefault();
    this.openModal();
  }

  openModal(){
    document.getElementById('create-form-modal').style.display = "flex";
  }

  creatableDiscussion(){
    return (
      <div className="row">
        <DiscussionsFormContainer groupId={this.props.group.id}/>
        <button className="create-chat top-space clickable" onClick={this.displayDiscussionsModal}>
          New Discussion
        </button>
      </div>
    );
  }

  render(){
    if (!this.props.discussions) {
      return null;
    }

    // <ActionCable
    //   channel={{ channel: 'DiscussionsChannel' }}
    //   onReceived={this.props.receiveDiscussion}
    // />
    return (
      <div className="background-container">
        <div className="row">
          <section className="discussions-section">
          {this.creatableDiscussion()}
            {this.props.group.discussionIds && this.props.group.discussionIds.length > 0 ? null : <NoDiscussions/>}
            <div className="discussion-index">
              {this.displayDiscussions()}
            </div>
          </section>
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
    discussions: state.entities.discussions,
  };
};
// messages: state.entities.messages,

const mdp = (dispatch) => {
  return {
    fetchDiscussion: (id) => dispatch(fetchDiscussion(id)),
    fetchDiscussions: (groupId) => dispatch(fetchDiscussions(groupId)),
  };
};
const DiscussionsContainer = connect(msp, mdp)(DiscussionsIndex);

export default DiscussionsContainer;
