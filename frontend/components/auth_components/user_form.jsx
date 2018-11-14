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
      this.setState({[field]: event.currentTarget.value})
    }
  }

  handleSubmit(event){
    event.preventDefault;
    this.props.processForm(this.state);
  }

  demoLogin(){
    this.props.processForm({email: 'demouser', password: '123123'});
  }

  notRegisteredYet(){
    if (this.props.formType === "login"){
      return (
        <p>
          Not registered with us yet? <Link className="auth-link" to='/signup'>Sign up</Link>
        </p>
      )
    }
  }

  submitButton(){
    if (this.props.formType === "signup"){
      return (
        <div>
          <p class="subtext">
            Your name is public. We'll use your email address to send you updates, and your location to find Meetups near you
          </p>
          <input className="submit-button-signup" type="submit" value={this.props.formType}/>
          <p class="subtext">
            When you "Continue", you agree to Meetup's Terms of Service. We will manage information about you as described in our Privacy Policy, and Cookie Policy.
          </p>
        </div>
      )
    } else {
      <input className="submit-button-login" type="submit" value={this.props.formType}/>
    }

  }

  alternativeAuth(){
    if (this.props.formType === "login"){
      return (
        <div className="alternative-auth">
          <button onClick={() => this.demoLogin()} className="submit-button" type="submit" value="Demo Sign In"/>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="form-layout">
        <div className="formInfo">
          <header className="form-header">
            <h1 className="form-title">{this.props.formType === "login" ? "Log in" : "Sign up"}</h1>
            <img className="lock-img" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/lock-icon.png"/>
          </header>
          {this.notRegisteredYet()}
        </div>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <section className="form-item">
            <label>
              Email address:
            </label>
            <input
              className="input-field"
              type="text"
              onChange={this.update('username')}
              value={this.state.username}
            />
          </section>
          <section className="form-item">
            <label>
              Password:
            </label>
            <input
            className="input-field"
            type="password"
            onChange={this.update('password')}
            value={this.state.password}
            />
          </section>
          { this.submitButton() }
        </form>
        { this.alternativeAuth()}
      </div>
    )
  }
}

export default withRouter(SessionForm)

// <input className="submit-button" type="submit" value={this.props.formType}/>
