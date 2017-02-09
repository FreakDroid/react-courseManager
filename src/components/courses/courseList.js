/**
 * Created by Wilfredo on 06/02/2017.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var CourseActions = require('../../actions/CourseActions');
var toastr = require('toastr');


var CoursesList = React.createClass({
  porpTypes: {
    Course: React.PropTypes.array.isRequired
  },

  deleteCourse: function (id, event) {
      event.preventDefault();
      console.log('deleting');
      CourseActions.deleteCourse(id);
      toastr.success('Course Deleted');
      return;
  },
  render: function () {
    var createCourseRow = function (Course) {
      return(
        <tr key={Course.id}>
          <td><a href={Course.watchHref} target="_blank">Watch</a></td>
          <td><a href="#" onClick={this.deleteCourse.bind(this, Course.id)}>Delete</a></td>
          <td><Link to={`/addCourse/${Course.id}`}>{Course.title}</Link></td>
          <td>{Course.author.name}</td>
          <td>{Course.length}</td>
          <td>{Course.category}</td>
        </tr>
      )
    };
    return(
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>Watch</th>
            <th>Delete</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Length</th>
            <th>Category</th>
          </tr>
          </thead>
          <tbody>
          {this.props.courses.map(createCourseRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports =  CoursesList;

