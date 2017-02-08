/**
 * Created by Wilfredo on 06/02/2017.
 */

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var CourseList = require('./courseList');
var CoursesStore = require('../../stores/courseStore');


var CoursesPage = React.createClass({

  getInitialState: function () {
    console.log('Testing ', CoursesStore.getAllCourse());
    return { courses: CoursesStore.getAllCourse()
    };
  },

  componentWillMount: function() {
    CoursesStore.addChangeListener(this._onChange);
  },

  //Clean up when this component is unmounted
  componentWillUnmount: function() {
    CoursesStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({courses: CoursesStore.get()})
  },

  render: function () {
    return(
      <div>
        <h1>Courses List</h1>
        <Link to="/addCourse" className="btn btn-default">Add new Course</Link>
        <CourseList courses={this.state.courses} />
      </div>
    )
  }
});

module.exports = CoursesPage;
