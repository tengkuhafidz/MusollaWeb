import React, {Component} from 'react'

import MusollahSingle from './MusollahSingle.jsx'

export default class NearbyMusollahs extends Component {

	constructor() {
	    super();

	    this.state = {
	      nearbyMusollahs: [],
	    };
	};

	nearbyMusollahs(){

		_this = this

  		$.getJSON('https://raw.githubusercontent.com/ruqqq/musolla-database/master/geohashed/w23b1t.json', function(data) {
    		//data is the JSON string
    		keys = Object.keys(data)

    		musollah = []

    		for(var i = 0; i < keys.length; i++){
    			musollah.push(data[keys[i]])
    		}

    		_this.setState({
				nearbyMusollahs: musollah
			})	

		});

		
	}

	render(){

		console.log("ssnm", this.state.nearbyMusollahs)

		nearbyMusollahs = this.state.nearbyMusollahs

		if(nearbyMusollahs.length < 1)
			this.nearbyMusollahs()
		
		console.log ("trf", nearbyMusollahs.length)					


		return(
			<div className="container">
				<h1>Nearby Musollahs</h1>
				<button onClick={this.nearbyMusollahs.bind(this)}> get </button>
							<div className="row">

					{nearbyMusollahs.map((singleMusollah)=>{
						return <MusollahSingle key={singleMusollah.uuid} singleMusollah={singleMusollah}/>
					})}
					</div>
			</div>
		)
	}
}
