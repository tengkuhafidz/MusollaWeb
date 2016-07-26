import React from 'react';

const Navi = React.createClass({
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">QuickPlate</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }

});

export default Navi;
