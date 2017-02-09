/**
 * Created by Wilfredo on 06/02/2017.
 */
"use strict";

var React = require('react');

var CourseForm = require('./courseForm');

var CourseStore = require('../../stores/courseStore');
var CourseActions = require('../../actions/CourseActions');

var AuthorStore = require('../../stores/authorStore');

var Router = require('react-router');

var ManageCourse = React.createClass({
  getInitialState: function () {
    return {
      course: {id:'', title:'', category: '', length: '', author: ''},
      errors:{},
      authors: AuthorStore.getAllAuthors()
    }
  },
  onChange:function (event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.course[field] = value;
    console.log('The course state ', this.state.course);
    return this.setState({course: this.state.course});
  },
  coursesFormIsValid: function () {
    var formValid = true;

    this.state.errors ={}; //Clear previous  errors.

    console.log('author ', this.state.course.author);

    if(this.state.course.title.length < 3){
      this.state.errors.title = 'Title must be at least 3 characters';
      formValid = false;
    }

    if(this.state.course.category.length < 3){
      this.state.errors.category = 'Category must be at least 3 characters';
      formValid = false;
    }
    if(this.state.course.author.length === 0){
      console.log('validating Authors');
      this.state.errors.author = 'Authors must be selected';
      formValid = false;
    }

    this.setState({errors: this.state.errors});

    return formValid;
  },
  onSave: function (event) {
    event.preventDefault();
    console.log('I will create a new course ');

    if(!this.coursesFormIsValid()){
      return;
    }

    if(!this.state.course.id){
      CourseActions.createCourse(this.state.course);
    }
    else{
      CourseActions.updateCourse(this.state.course);
    }

    Router.browserHistory.push("/courses");
  },
  componentWillMount: function () {
    var CourseId = this.props.params.id;
    console.log('My Id is ', CourseId);

    if(CourseId){
      this.setState({course: CourseStore.getCourseById(CourseId)});
    }
  },
  render: function () {
    return(
      <div>
        <CourseForm Course={this.state.course} onChange={this.onChange} errors={this.state.errors} onSave={this.onSave} authors={this.state.authors}/>
      </div>
    )
  }
});

module.exports = ManageCourse;