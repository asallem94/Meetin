import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (event) => {
      this.setState({[field]: event.currentTarget.value})
    }
  }

  handleSubmit(event){
    debugger
    event.preventDefault;
    this.props.processForm(this.state);
  }

  render(){
    return (
      <div className="form-layout">
        <div className="formInfo">
          <header className="form-header">
            <h1 className="form-title">{this.props.formType === "login" ? "Log in" : "Sign up"}</h1>
            <img className="lock-img" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/lock-icon.png"/>
          </header>
          <p>Not registered with us yet? {this.props.formType === "login" ? "Sign up" : "Log in"}</p>
        </div>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <section className="form-item">
            <label>
              Email address:
            </label>
            <input
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
            type="password"
            onChange={this.update('password')}
            value={this.state.password}
            />
          </section>

          <input className="submit-button" type="submit" value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm)
