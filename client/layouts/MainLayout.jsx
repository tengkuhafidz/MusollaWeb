import React, {Component} from 'react'
import MainNavbar from './MainNavbar.jsx'

export const MainLayout = ({content}) =>(
	<div>
	      <MainNavbar />
		  
		  <div className="container">
		  	{content}
		  </div>
	</div>
)