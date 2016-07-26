import React from 'react';

export default class Home extends React.Component{
  componentDidMount(){
    document.title = "Quick Plate | Home"
  }

  render(){
    return(
      <h1>This is home.. Truly.. Where I know I must be....</h1>
    )
  }
}
