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
      		</div>
    	)
  	}
}
