/**
 * Created by Wilfredo on 31/01/2017.
 */
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var InitializeAction = require('./actions/initializeActions');
var browserHistory = require('react-router').browserHistory;
var routes = require('./routes');

InitializeAction.initApp();

InitializeAction.initCourse();

ReactDOM.render((
  <Router history={browserHistory} routes={routes}>
  </Router>
), document.getElementById('app'));




