import React from 'react'
import { connect } from 'react-redux'
class Interests extends React.Component {
  constructor(props){
    super(props)

  }
  ComponentDidMount(){
    debugger
    this.props.fetchAllInterests()
  }
  interestItem(){
    debugger
    return this.props.interests.map((interest)=>{
      return (
        <li className="interest-item">
          <h3>{interest.title_topics}</h3>
          <img src={interest.img_url} alt=""/>
        </li>
      )
    })
    {this.props.interests.title}


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
  debugger
  return ({
    interests: state.entities.interests
  })
}
const mdp = (dispatch) => {
  return ({
    fetchInterests: () => dispatch(fetchInterests())
  });
}
const InterestsContainer = connect(msp, mdp)(Interests);
export default InterestsContainer
