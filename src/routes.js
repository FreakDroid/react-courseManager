/**
 * Created by Wilfredo on 01/02/2017.
 */
"use strcit";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var Redirect = Router.Redirect;



var App = require('./components/app');
var homepage = require('./components/homepage');
var authorPage = require('./components/authors/authorPage');
var aboutPage = require('./components/about/aboutPage');
var notFoundPage = require('./components/notFoundPage');
var manageAuthorsPage = require('./components/authors/manageAuthorPage');
var coursePage = require('./components/courses/coursesPage');
var manageCoursePage = require('./components/courses/manageCourses');

var Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={homepage}/>
    <Route path="/authors" component={authorPage}/>
    <Route path="/about" component={aboutPage}/>
    <Route path="/addAuthor" component={manageAuthorsPage}/>
    <Route path="/addCourse" component={manageCoursePage}/>
    <Route path="/addAuthor/:id" component={manageAuthorsPage}/>
    <Route path="/addCourse/:id" component={manageCoursePage} />
    <Route path="/courses" component={coursePage}/>
    <Route path="*" component={notFoundPage}/>
    <Redirect from="/abut" to="/about" />
  </Route>);

module.exports = Routes;