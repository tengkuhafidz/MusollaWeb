import React from 'react';
import {Accounts} from 'meteor/accounts-base'

const Register = React.createClass({
  getInitialState: function(){
    return {email: '', password: ''};
  },

  componentDidMount: function(){
    document.title = "QuickPlate | Register";
  },

  handleEmailChange: function(e){
    this.setState({email: e.target.value});
  },

  handlePasswordChange: function(e){
    this.setState({password: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

    if(!email || !password){
      return;
    }

    var options = {
      email: email,
      password: password,
    }
    //send request to server
    Accounts.createUser(options, function(err){
      if(err){
        console.log("Register error")
      } else {
        console.log("Register Success")
        FlowRouter.go("dashboard")
      }
    })
    this.setState({ email: '', password: ''});
  },

  render(){
    return (
      <div className="row">
        <div className="col s4 offset-s4">
          <h2 className="header center">Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" value={this.state.email} onChange={this.handleEmailChange} />
                <label htmlFor="email" data-error="Error!">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" value={this.state.password} onChange={this.handlePasswordChange}/>
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="row">
              <button className="btn waves-effect waves-light pull-right" type="submit" name="action">Sign Me Up!
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

export default Register;
