import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDiscussion } from './../actions/discussion_actions';
import { createComment, fetchComment } from './../actions/comment_actions';
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
      <div className="basic-row upper-spaced-item">
        <li className="comment-action-item" onClick={this.selectReply("comments", commentId)}>reply</li>
        <li className="comment-action-item" onClick={this.viewMoreComments(commentId)}>{this.props.comments[commentId].comment_count} replies</li>
        <li className="comment-item">{Moment(new Date(this.props.comments[commentId].created_at)).fromNow()}</li>
      </div>
    );
  }

  displayComments(item){
    if (!item.commentIds){
      return null;
    }
    // debugger
    return item.commentIds.map((commentId)=>{
      const ids = this.props.comments[commentId].commentIds;
      return (
        <div className="basic-row" key={commentId}>
          <img className="profile-circle" src={this.props.comments[commentId].author_img}/>
          <div className="basic-column left-spaced-item">
            <h3>{this.props.comments[commentId].body}</h3>
            {this.commentActions(commentId)}
            {ids.length > 0 && !!this.props.comments[ids[0]] ? this.displayComments(this.props.comments[commentId]) : null}
            {this.state.type === "comments" && this.state.typeId === commentId ? this.addCommentForm("comments", commentId) : null}
          </div>
        </div>
      );
    });
  }

  selectReply(type, typeId){
    return (e) => {
      e.preventDefault();
      this.props.fetchComment(typeId).then(
        ()=>{
          this.setState({type: type, typeId: typeId});
        }
      );
    };
  }
  viewMoreComments(commentId){
    return (e) => {
      this.props.fetchComment(commentId);
    };
  }

  submitComment(e){
    e.preventDefault();
    const body = document.getElementById('comment').value;
    this.props.createComment({body, type: this.state.type, typeId: this.state.typeId});
    document.getElementById('comment').value = "";
  }

  addCommentForm(type, typeId){
    if (!this.props.currentUser) {
      return null;
    }
    return (
      <form className="add-comment-form " onSubmit={this.submitComment}>
        <img className="profile-circle" src={this.props.currentUser.imgUrl}/>
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
          {this.addCommentForm("discussions", this.props.match.params.discussionId)}
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
    currentUser: currentUser,
    discussions: state.entities.discussions,
    comments: state.entities.comments
  };
};
// messages: state.entities.messages,

const mdp = (dispatch) => {
  return {
    fetchDiscussion: (id, offset) => dispatch(fetchDiscussion(id, offset)),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchComment: (id) => dispatch(fetchComment(id))
  };
};
const DiscussionShowContainer = connect(msp, mdp)(DiscussionShow);

export default DiscussionShowContainer;
