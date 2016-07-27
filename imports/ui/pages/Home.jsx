import React, {Component} from 'react';

import Intro from '../home/Intro.jsx';
import About from '../home/About.jsx';
import NearbyMusollahs from '../home/NearbyMusollahs.jsx'

export default class Home extends Component{

  render(){
    return(
      <div>
      	<Intro />
      	<NearbyMusollahs />
      	<About />
      </div>
    )
  }
}
