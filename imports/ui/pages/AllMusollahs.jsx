import React, {Component} from 'react';

import MusollahSingle from '../home/MusollahSingle.jsx'

export default class AllMusollahs extends Component{
	constructor() {
	    super()

	    this.state = {
	      allMusollahs: [],
	    }
	}

	allMusollahs(){

		_this = this

		HTTP.call( 'GET', 'https://raw.githubusercontent.com/ruqqq/musolla-database/master/data.json', {}, function( error, response ) {
		  
		  if (error) {
		    console.log(error);
		  } else {

		  	data = JSON.parse(response.content)
		    keys = Object.keys(data)
		    console.log("d",data)
    		musollah = []

    		for(var i = 0; i < keys.length; i++){
    			musollah.push(data[keys[i]])
    		}
    		
    		console.log(musollah)

    		_this.setState({
				allMusollahs: musollah
			})	

		  }
		})
	}

  	render(){

  		allMusollahs = this.state.allMusollahs

  		if(allMusollahs.length < 1)
  			this.allMusollahs()


    	return(
			<div className="container">
				<h1>All Musollahs</h1>
					<div className="row">
						{allMusollahs.map((singleMusollah)=>{
							return <MusollahSingle key={singleMusollah.uuid} singleMusollah={singleMusollah}/>
						})}
					</div>
			</div>
   		)
  	}
}
