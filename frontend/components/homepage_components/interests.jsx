import React from 'react';
import { connect } from 'react-redux';
import { fetchInterests } from '../../actions/meetin_actions';

class Interests extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchInterests();
  }

  interestItem(){
    return this.props.interests.map((interest)=>{
      return (
        <li key={interest.id} className="interest-item">
          <h3>{interest.topic_titles}</h3>
          <img className="category-img" src={interest.picture_url} alt=""/>
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="interests-container">
        {this.interestItem()}
      </ul>
    );
  }
}

const msp = (state) => {
  return ({
    interests: Object.values(state.entities.interests)
  });
};
const mdp = (dispatch) => {
  // debugger
  return ({
    fetchInterests: () => {
      return dispatch(fetchInterests());
    }
  });
};
const InterestsContainer = connect(msp, mdp)(Interests);
export default InterestsContainer;
