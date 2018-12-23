import React from 'react';

class CssTests extends React.Component {
  constructor(props){
    super(props);
    this.bubbleCreator = this.bubbleCreator.bind(this);
    this.resetBubbles = this.resetBubble.bind(this);
  }

  bubbleCreator(){
    const bubbles = [];
    for (var i = 1; i < 7; i++) {
      let bubble = (<section key={i} id={`${i}`} className={`bubbles bubbles-bottom${i}`}>{i}</section>);
      bubbles.push(bubble);
    }
    return bubbles;

  }

  resetBubble(){
    document.getElementById(`${i}`).classList.toggle("bubbles-top");
  }

  componentDidMount(){
    for (var i = 1; i < 2; i++) {
      document.getElementById(`${i}`).classList.toggle("bubbles-top");
      document.getElementById(`${i}`).addEventListener("transitionend", this.resetBubble);
    }
    
  }
  render(){
    return (

      <div className="canvas">
        {this.bubbleCreator()}
      </div>
    );
  }
}
// {this.bubbleCreator()}
// <div className="fire-logo">
// <img src="./app/assets/images/Simple_wolf_logo.png"/>
// <i className="fas fa-star"></i>
// </div>

export default CssTests;
