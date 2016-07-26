import React, {Component} from 'react'
import AccountsUIWrapper from '../../imports/ui/AccountsUI.jsx'

export default class PatronNavbar extends Component {
	componentDidMount(){
		$(".button-collapse").sideNav();
	}
	render(){
		return(
			<nav className="red darken-4">
       <div className="container">
         <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Meteor + React BoilerPlate</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li className="active"><a href="/">This Page</a></li>
              <li> <AccountsUIWrapper /> </li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="/">This Page</a></li>
              <li> <AccountsUIWrapper /> </li>
            </ul>
          </div>
        </div>
      </nav>

		)
	}
}