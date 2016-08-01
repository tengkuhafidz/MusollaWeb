import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

import MainLayout from '/imports/ui/layouts/MainLayout.jsx';

import Home from '/imports/ui/pages/Home.jsx';
import AllMusollahs from '/imports/ui/pages/AllMusollahs.jsx';
import MusollahDetails from '/imports/ui/pages/MusollahDetails.jsx';
import MusollahForm from '/imports/ui/pages/MusollahForm.jsx';

FlowRouter.route('/', {
  action: function(){
    mount(MainLayout, {
      content: () => <Home />
  })
},
	name: "home"
});

FlowRouter.route('/allMusollahs', {
  action: function(){
    mount(MainLayout, {
      content: () => <AllMusollahs />
  })
},
	name: "allMusollahs"
});

FlowRouter.route('/musollahDetails/:uuid', {
  action: function(params){
    mount(MainLayout, {
      content: () => <MusollahDetails uuid={params.uuid}/>
  })
},
  name: "musollahDetails"
});


FlowRouter.route('/musollahForm', {
  action: function(){
    mount(MainLayout, {
      content: () => <MusollahForm />
  })
},
  name: "musollahForm"
});