import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {name:'', email: '', password: '', lat: '', lng: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCoords = this.handleCoords.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field){
    return (event) => {
      this.setState({[field]: event.currentTarget.value});
    };
  }

  componentWillMount(){
    this.props.clearErrors([]);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.handleCoords);
  }
  handleCoords(location){
    this.setState({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.signup(this.state);
  }

  demoLogin(e){
    e.preventDefault();
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
      <div className="signout-form-layout">
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h1 className="registering-form-title">Sign up</h1>
          <button onClick={this.demoLogin} className="demo-signup clickable" type="submit">Demo Sign In</button>
          <section className="form-item">
            <label>
              Your name
            </label>
            <input
              className="input-field"
              type="text"
              onChange={this.update('name')}
              value={this.state.name}
            />
          </section>
          <section className="form-item">
            <label>
              Email
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
            <p className="subtext begining-subtext">
              Your name is public. We'll use your email address to send you updates, and your location to find Meet-ins near you
            </p>
            <ul>
              {this.displayErrors()}
            </ul>
            <input className="submit-button-signup clickable" type="submit" value="Sign Up"/>
            <div className="already-user">
              Already a member? <Link className="auth-link" to="/login">Log in</Link>.
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UserForm);
