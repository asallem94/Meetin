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
    this.props.signup(this.state);
  }

  demoLogin(){
    this.props.signup({email: 'demouser', password: '123123'});
  }


  render(){
    return (
      <div className="form-layout">
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h1 className="registering-form-title">Sign up</h1>
          <button onClick={() => this.demoLogin()} className="submit-button-signup" type="submit">Demo Sign In</button>
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
          <div className="submitting-section">
            <p className="subtext">
              Your name is public. We'll use your email address to send you updates, and your location to find Meetups near you
            </p>
            <input className="submit-button-signup" type="submit" value="Sign Up"/>
            <p className="subtext ending-subtext">
              When you "Continue", you agree to Meetup's Terms of Service. We will manage information about you as described in our Privacy Policy, and Cookie Policy.
            </p>
            <div className="already-user">
            Already a member? <Link className="auth-link" to="/login">Log in</Link>.
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default withRouter(UserForm)

// <input className="submit-button" type="submit" value={this.props.formType}/>
