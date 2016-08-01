import React, {Component} from 'react';

export default class Home extends Component{

  handleSubmit(e){
  	e.preventDefault()
  	var name = this.refs.name.value.trim()
  	var type = this.refs.type.value.trim()

  	console.log("nt", name + " " + type)

 	musollahJson = {
					  "uuid": "f8ccc11e-65aa-4fcf-b2b1-614d276b6630",
					  "name": name,
					  "address": "Yishun Avenue 2 S(769098)",
					  "location": {
					    "latitude": 1.429836,
					    "longitude": 103.835568
					  },
					  "type": type,
					  "geohash": "w23b4u6c2h",
					  "mrt": "Yishun",
					  "directions": "Head to the lift lobby on level 4, nect to Kid@Play waterpark. The lift lobby is right beside the washroom. Enter the staircase landing in front of the cargo lifts. Musolla is on the top floor.",
					  "level": "4",
					  "toiletLevel": "4",
					  "unisexCapacity": 2,
					  "maleCapacity": 0,
					  "femaleCapacity": 0,
					  "remarks": "Not an official praying area. Shared male & female area. Provision found in the hosereel cabinet.",
					  "images": [
					    {
					      "uuid": "28f2650f-a6ed-46ba-90e7-a60196ae12b1",
					      "uploaderName": "Tengku Hafidz",
					      "createdAt": "2015-06-04T06:34:11.389Z",
					      "updatedAt": "2015-06-04T06:34:11.389Z"
					    }
					  ],
					  "createdAt": "2014-12-23T04:46:36.979Z",
					  "updatedAt": "2014-12-23T05:32:49.084Z"
					} 	

	console.log("mj", musollahJson)
  }


  render(){
    return(
		<div className="row container">
		    <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
		    	<h3> Add Musollah </h3>
		      <div className="row">
		        <div className="input-field col s6">
		          <input id="name" ref="name" type="text" className="validate" />
		          <label htmlFor="name">Name</label>
		        </div>
		        <div className="input-field col s6">
		          <input id="type" ref="type" type="text" className="validate" />
		          <label htmlFor="type">Type</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="password" type="password" className="validate" />
		          <label htmlFor="password">Address</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="password" type="password" className="validate" />
		          <label htmlFor="password">Landmark</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="password" type="password" className="validate" />
		          <label htmlFor="password">Directions</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="password" type="password" className="validate" />
		          <label htmlFor="password">Level</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="password" type="password" className="validate" />
		          <label htmlFor="password">Toilet Level</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="password" type="password" className="validate" />
		          <label htmlFor="password">Capacity</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="password" type="password" className="validate" />
		          <label htmlFor="password">Remarks</label>
		        </div>
		      </div>

		      <button className="btn" type="submit" > Add Musollah </button>
		    </form>
		  </div>
    )
  }
}
