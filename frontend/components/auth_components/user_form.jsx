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
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h1 className="registering-form-title">Sign up</h1>
          <button onClick={() => this.demoLogin()} className="submit-button-signup" type="submit">Demo Sign In</button>
          <section className="form-item">
            <label>
              Your name
            </label>
            <input
              className="input-field"
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
            />
          </section>
          <section className="form-item">
            <label>
              Email address
            </label>
            <input
              className="input-field"
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
            />
          </section>
          <section className="form-item">
            <label>
              Password
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
            <ul>
              {this.displayErrors()}
            </ul>
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
