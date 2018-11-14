import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (event) => {
      this.setState({[field]: event.currentTarget.value});
    };
  }

  handleSubmit(event){
    event.preventDefault;
    this.props.signup(this.state);
  }

  demoLogin(){
    this.props.login({email: 'test4@gmail.com', password: '123123'});
  }

  displayErrors(){
    return this.props.errors.session.map((err, idx)=>(
      <li className="err-message" key={idx}>
        {err}
      </li>
    ));
  }

  render(){
    return (
      <div className="form-layout">


      </div>
    );
  }
}

export default withRouter(UserForm);

// <input className="submit-button" type="submit" value={this.props.formType}/>
