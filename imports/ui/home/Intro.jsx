import React, {Component} from 'react'

export default class Intro extends Component {

  	componentDidMount(){
  		$(document).ready(function(){
        		$('.parallax').parallax();
      	});
          
  	}

    render(){
    	return(
     		<div>
      		<div className="parallax-container">
	   	   		<div className="parallax"><img src="/mosque.jpg" className="introBg"/></div>
	   	 		</div>
          <div className="divOnImage center-align">
            <h2 className="">Time for Solah?</h2>
            <p className="flow-text grey-text text-darken-2">Find nearby places to perform your solah by clicking the button below.</p>
            <a className="topGap green btn-large" href="/allMusollahs">Find Musollah</a>&nbsp;
          </div>

      	</div>
    	)
  	}
}
