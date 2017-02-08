/**
 * Created by Wilfredo on 02/02/2017.
 */
"use strcit";


var React = require('react');


var Input = require('../common/textInput');

var AuthorForm = React.createClass({
  propTypes:{
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
  },

  render: function () {
    return(
      <form>
        <h1>
          Manage Author
        </h1>
        <Input label="firstName" onChange={this.props.onChange}
               name="firstName" value={this.props.author.firstName}
               placeholder="First Name" error={this.props.errors.firstName}/>

        <Input label="lastName" onChange={this.props.onChange}
               name="lastName" value={this.props.author.lastName}
               placeholder="Last Name" error={this.props.errors.lastName}/>
        <input type="submit" value="Save" className="btn btn-default"
               onClick={this.props.onSave}/>
      </form>

    );
  }
});

module.exports = AuthorForm;