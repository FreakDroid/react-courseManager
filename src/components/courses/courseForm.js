/**
 * Created by Wilfredo on 06/02/2017.
 */
"use strcit";


var React = require('react');


var Input = require('../common/textInput');
var Dropdown = require('../common/dropdown');

var CourseForm = React.createClass({
  // propTypes:{
  //   author: React.PropTypes.object.isRequired,
  //   onSave: React.PropTypes.func.isRequired,
  //   onChange: React.PropTypes.func.isRequired,
  //   errors: React.PropTypes.object,
  // },

  render: function () {
    return(
      <form>
        <h1>
          Manage Author
        </h1>
        <Input label="title" onChange={this.props.onChange}
               name="title" value={this.props.Course.title}
               placeholder="Title" error={this.props.errors.title}/>

        <Dropdown label="author" onChange={this.props.onChange} value={this.props.Course.author}
                name="author" placeholder="Author" authors={this.props.authors} error={this.props.errors.author}/>

        <Input label="category" onChange={this.props.onChange}
               name="category" value={this.props.Course.category}
               placeholder="Category" error={this.props.errors.category}/>

        <Input label="length" onChange={this.props.onChange}
               name="length" value={this.props.Course.length}
               placeholder="Length" error={this.props.errors.length}/>


        <input type="submit" value="Save" className="btn btn-default"
               onClick={this.props.onSave}/>
      </form>

    );
  }
});

module.exports = CourseForm;