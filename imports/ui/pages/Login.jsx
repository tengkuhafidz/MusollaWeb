import React from 'react';
import {Session} from 'meteor/session'

const Login = React.createClass({
  getInitialState: function(){
    return {email: '', password: ''};
  },
  componentDidMount: function(){
    document.title = "QuickPlate | Login"
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

    Meteor.loginWithPassword(email, password, function(err){
      if(err){
      } else {
        var back = Session.get("back")
        if(back == undefined || back == ""){
          FlowRouter.go("dashboard")
        } else {
          FlowRouter.go(Session.get("back"))
          Session.set("back", "");
        }

      }
    });
    this.setState({email: '', password: ''})
  },
  render(){
    return (
      <div className="row">
        <div className="col s4 offset-s4">
          <h2 className="header center">Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" onChange={this.handleEmailChange} />
                <label htmlFor="email" data-error="Error!">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" onChange={this.handlePasswordChange}/>
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="row">
              <button className="btn waves-effect waves-light" type="submit" name="action">Log Me In!
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

export default Login;
