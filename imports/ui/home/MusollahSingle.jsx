import React, {Component} from 'react'

export default class MusollahSingle extends Component {

	render(){
		musollah = this.props.singleMusollah
		return(
			  <div className="col s12 m6 l6">
			    
			    <div className="card horizontal grey lighten-4">
			      <div className="card-stacked">
			        <div className="card-content">
			          <h5>{musollah.name}</h5>
			          <p>{musollah.address}</p>
			          <p>{musollah.type}</p>
			        </div>
			        <div className="card-action">
			          <a href={`/musollahDetails/${musollah.uuid}`}>This is a link</a>
			        </div>
			      </div>
			    </div>
			  </div>
		)
	}
}