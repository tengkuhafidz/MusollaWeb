import React from 'react';

export default class Dashboard extends React.Component{
  componentDidMount(){
    document.title = "Quick Plate | Dashboard"
  }

  render(){
    return(
      <h1>A board so fast, it's called it the <strong>dash</strong>board.</h1>
    )
  }
}
