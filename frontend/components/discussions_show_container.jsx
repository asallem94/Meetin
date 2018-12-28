import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDiscussion } from './../actions/discussion_actions';
import { createComment } from './../actions/comment_actions';
import Moment from 'moment';

class DiscussionShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {offset: 0, addingCommentId: `discussion-${this.props.match.params.discussionId}`, type: "discussions", typeId: this.props.match.params.discussionId};
    this.submitComment = this.submitComment.bind(this);
  }
  componentDidMount(){
    this.props.fetchDiscussion(this.props.match.params.discussionId, 0);
  }

  commentActions(commentId){
    return (
      <div className="basic-row top-spaced-item">
        <li className="spaced-item">reply</li>
        <li className="spaced-item">{this.props.comments[commentId].comment_count} replies</li>
        <li className="spaced-item">{Moment(new Date(this.props.comments[commentId].created_at)).fromNow()}</li>
      </div>
    );
  }

  displayComments(item){
    if (!item.commentIds){
      return null;
    }
    return item.commentIds.map((commentId)=>{
      return (

        <div className="basic-row" key={commentId}>
          <img className="profile-circle" src={this.props.comments[commentId].author_img}/>
          <div className="basic-column left-spaced-item">
            <h3>{this.props.comments[commentId].body}</h3>
            {this.commentActions(commentId)}
            {this.state.type === "comment" && this.state.typeId === commentId ? this.addCommentForm("comment", commentId) : null}
          </div>
        </div>
      );
    });
  }

  submitComment(e){
    e.preventDefault();
    const body = document.getElementById('comment').value;
    this.props.createComment({body, type: this.state.type, typeId: this.state.typeId});
  }

  addCommentForm(type, typeId){
    return (
      <form className="add-comment-form " onSubmit={this.submitComment}>
        <input id="comment" className="message-editor" type="text" required placeholder="Write a Comment"/>
        <section className="message-sender clickable" onClick={this.submitComment}>
          <i className="fas fa-paper-plane send-icon"></i>
        </section>
      </form>
    );
  }


  render(){
    if (!this.props.discussions[this.props.match.params.discussionId]){
      return null;
    }
    return (
      <div className="background">
        <div id={`discussion-${this.props.match.params.discussionId}`} className="row row-container">
          <Link to={`/groups/${this.props.discussions[this.props.match.params.discussionId].group_id}/discussions/${this.props.match.params.discussionId}`} className="nonlink">
            <h2><i className="fas fa-less-than"></i> Back to Group</h2>
          </Link>
          <h1>Discussion: {this.props.discussions[this.props.match.params.discussionId].topic}</h1>
          <ul>
            {this.displayComments(this.props.discussions[this.props.match.params.discussionId])}
          </ul>
          {this.addCommentForm("discussion", this.props.match.params.discussionId)}
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
    comments: state.entities.comments
  };
};
// messages: state.entities.messages,

const mdp = (dispatch) => {
  return {
    fetchDiscussion: (id, offset) => dispatch(fetchDiscussion(id, offset)),
    createComment: (comment) => dispatch(createComment(comment))
  };
};
const DiscussionShowContainer = connect(msp, mdp)(DiscussionShow);

export default DiscussionShowContainer;
