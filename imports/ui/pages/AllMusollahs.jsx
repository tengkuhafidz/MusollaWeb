import React, {Component} from 'react';

import MusollahSingle from '../home/MusollahSingle.jsx'

import {fs} from 'file-system'
import ngeohash from 'ngeohash'
import geopoint from 'geopoint'

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

	nearbyMusollah(){
		var data = this.state.allMusollahs

		var currentLocation = new GeoPoint(1.434466, 103.785648)
		
		var boundingCoordinates = currentLocation.boundingCoordinates(1, true)

		var hashes = geohash.bboxes(boundingCoordinates[0].latitude(), boundingCoordinates[0].longitude(), boundingCoordinates[1].latitude(), boundingCoordinates[1].longitude(), 6)

		for (var hash of hashes) {
		  
		  var fileLink = 'https://github.com/ruqqq/musolla-database/blob/master/geohashed/' + hash + '.json'
		  
		  try {
		    fs.accessSync(fileLink, fs.F_OK)

		    geohashes = require(fileLink)
		    
		    for (var hashstring in geohashes) {
		      console.log(geohashes[hashstring])
		    }
		  
		  } catch (e) {
		  
		  }
		}
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
