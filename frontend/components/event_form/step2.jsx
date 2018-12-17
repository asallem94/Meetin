import React from 'react';

class Step2 extends React.Component{
  constructor(props){
    super(props);

    this.state={interestFilter: ""};
    this.handleInterestFilter = this.handleInterestFilter.bind(this);

  }
  handleInterestFilter(e){
    this.setState({interestFilter: e.target.value});
  }

  displayInterests (){
    const filteredIterest = this.props.interests.filter( interest => {return interest.topic_titles.toLowerCase().includes(this.state.interestFilter.toLowerCase());});
    return filteredIterest.map((interest) => (
        <label key={interest.id}  className="interest-label"> {interest.topic_titles}
          <input type="checkbox" id={interest.id} className="interest-checkbox" value={interest.topic_titles}/>
          <i className="far fa-heart heart-hollow"></i>
          <i className="fas fa-heart heart-solid"></i>
        </label>
      ));
  }


  render (){
    return (
      <div id="2" className="step-container hidden-step">
      <img className="new-group-icon" src="https://secure.meetupstatic.com/s/img/322408653975454564695/start_v2/textBubbles.svg"/>
      <div className="step-content">
      <h3 className="step-label">STEP 2 OF 4</h3>
      <h1 className="step-action">What will your meetin be about?</h1>
      <div className="step-inputs">
      <input onChange={this.handleInterestFilter} type="text" placeholder="Search for a topic" className="interest-filter" value={this.state.interestFilter}/>
      {this.displayInterests()}
      </div>
        <button onClick={(e)=>this.props.unhideStep('3', e)} className="continue-button">Next</button>
      </div>
      </div>
    );
  }
}

export default Step2;
