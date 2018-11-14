import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
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



  render(){
    return (
      <div className="form-layout">
        <div className="formInfo">
          <header className="form-header">
            <h1 className="form-title">{this.props.formType === "login" ? "Log in" : "Sign up"}</h1>
            <img className="lock-img" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/lock-icon.png"/>
          </header>
          <p className="not-yet-registered">
            Not registered with us yet? <Link className="auth-link" to='/signup'>Sign up</Link>
          </p>
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
          <input className="submit-button-login" type="submit" value={this.props.formType}/>
        </form>
        <div className="alternative-auth">
          <h2 className="or">OR</h2>
          <button onClick={() => this.demoLogin()} className="submit-button-signup" type="submit">Demo Sign In</button>
        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm)

// <input className="submit-button" type="submit" value={this.props.formType}/>
