import React, {Component} from 'react';

export default class MusollahDetails extends Component{
	constructor() {
	    super()

	    this.state = {
	      singleMusollah: ""
	    }
	}

	singleMusollah(){

		_this = this

		HTTP.call( 'GET', 'https://raw.githubusercontent.com/ruqqq/musolla-database/master/data.json', {}, function( error, response ) {
		  
		  if (error) {
		    console.log(error);
		  } else {

		  	data = JSON.parse(response.content)
		  	singleMusollah = data[_this.props.uuid]

    		_this.setState({
				singleMusollah: singleMusollah
			})	

		  }
		})
	}

  	render(){

  		singleMusollah = this.state.singleMusollah

  		if(singleMusollah === "")
  			this.singleMusollah()

    	return(
			<div className="container">
				<h1>Musollah Details</h1>
					<div className="row">
						<p>{singleMusollah.name}</p>
						<p>{singleMusollah.address}</p>
						<p>{singleMusollah.type}</p>
						<p>{singleMusollah.directions}</p>
						<p>{singleMusollah.level}</p>
						<p>{singleMusollah.toiletLevel}</p>
						<p>{singleMusollah.mrt}</p>
				



					</div>
			</div>
   		)
  	}
}
