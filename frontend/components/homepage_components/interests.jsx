import React from 'react'
import { connect } from 'react-redux'
class Interests extends React.Component {
  constructor(props){
    super(props)
  }
  ComponentDidMount(){

  }
  interestItem(){
    this.props.interests.map((interest)=>{
      return (
        <li className="interest-item">
          <h3>{interest.title}</h3>
          <img src={interest.img_url} alt="">
        </li>
      )
    })
    {this.props.interests.title}


  }
  render(){
    return (
      <div className="interests-container">
        {interestItem()}
      </div>
    );
  }
};

const msp = (state) => {
  return ({
    interests: state.entities.interests
  })
}
const mdp = (dispatch) => {
  return ({
    interests: ()=>( dispatch(fetchAllInterests()) )
  }
}
const InterestsContainer = connect(msp, mdp)(Interests);
export default InterestsContainer
