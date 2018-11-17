import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {name:'', email: '', password: '', lat: '', lng: '', im};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCoords = this.handleCoords.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field){
    return (event) => {
      this.setState({[field]: event.currentTarget.value});
    };
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

  getAddress(latitude, longitude){
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();

        var method = 'GET';
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
        var async = true;

        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var data = JSON.parse(request.responseText);
                    var address = data.results[0];
                    resolve(address);
                }
                else {
                    reject(request.status);
                }
            }
        };
        request.send();
    });
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
          <button onClick={() => this.demoLogin()} className="demo-signup" type="submit">Demo Sign In</button>
          <section className="form-item">
            <label>
              Group title:
            </label>
            <input
              className="input-field"
              type="text"
              onChange={this.update('title')}
              value={this.state.title}
            />
          </section>
          <section className="form-item">
            <label>
              What are you about?
            </label>
            <input
              className="input-field"
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
            />
          </section>

          <div className="submitting-section">
            <ul>
              {this.displayErrors()}
            </ul>
            <input className="submit-button" type="submit" value="Create group"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(GroupForm);
