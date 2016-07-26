import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';

import Layout from '/imports/ui/layouts/Layout.jsx';
import MainLayout from '/imports/ui/layouts/MainLayout.jsx';

import Register from '/imports/ui/pages/Register.jsx';
import Login from '/imports/ui/pages/Login.jsx';
import Home from '/imports/ui/pages/Home.jsx';
import Dashboard from '/imports/ui/pages/Dashboard.jsx';

function isAuthenticated(context, redirect){
  if(!Meteor.userId()){
    Session.set("back", context.path)
    redirect("login")
  }
}

function becauseAuthenticated(context, redirect){
  if(Meteor.userId()){
    redirect("dashboard");
  }
}

FlowRouter.triggers.enter([isAuthenticated], {except: ["home", "login", "register"]});
FlowRouter.triggers.enter([becauseAuthenticated], {only: ["home", "login", "register"]})

FlowRouter.route('/', {
  action: function(){
    mount(Layout, {
      content: () => <Home />
  })
},
name: "home"
});

FlowRouter.route('/register', {
  action: function() {
    mount(Layout, {
      content: () => <Register />,
  });
},
name: "register"
});

FlowRouter.route('/login', {
  action: function() {
    mount(Layout, {
      content: () => <Login />,
  });
},
name: "login"
});

FlowRouter.route("/dashboard", {
  action: function(){
    mount(MainLayout, {
      content: () => <Dashboard />
  })
},
name: "dashboard"
});


//import layout
//EXAMPLE:
// import {MainLayout} from './layouts/MainLayout.jsx';

//import component the route should call
//EXAMPLE:
// import MainComponent from '../imports/ui/components/MainComponent.jsx';

//decalre flow routers
//EXAMPLE:
// FlowRouter.route('/', {
// 	action(){
// 		mount(MainLayout, {
// 			content: (<MainComponent />)
// 		})
// 	}
// });

//EXAMPLE of flow router with props
// FlowRouter.route('/resolution/:id', {
// 	action(params){
// 		mount(MainLayout, {
// 			content: (<ResolutionDetails id={params.id}/>)
// 		})
// 	}
// });
