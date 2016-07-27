import React from 'react';
import {Meteor} from 'meteor/meteor';

const MainNav = React.createClass({
  
  componentDidMount(){
    $('.dropdown-button').dropdown({
      hover: true, // Activate on hover
      belowOrigin: true // Displays dropdown below the button
    });

    $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  },

  render(){
    return(
      <div className="navbar-fixed">
         <nav className="green">
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="">Sass</a></li>
              <li><a href="">Components</a></li>
              <li><a href="/allMusollahs">allMusollahs</a></li>
            </ul>
          </div>
        </nav>
      </div>
        
    )
  }
});

export default MainNav;
