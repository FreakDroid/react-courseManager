/**
 * Created by Wilfredo on 07/02/2017.
 */
var React = require('react');

var _ = require('lodash');

var Dropdown= React.createClass({
  getInitialState: function(){
    return { value: ''};
  },
  onChangeHandler: function(e){
    var authorId = e.target.value;

    //Create the new objecto to retrive
    var evnt = {target: {name: '', value:''}};
    //specific handeling for Authors ddl
    this.setState({selectValue: authorId});

    //Get all the info about the author that I pass from props
    var _author = _.find(this.props.authors, function(author) {
      return authorId === author.id;
    });

    //set to the new object
    evnt.target.name = 'author';
    evnt.target.value = {id: _author.id, name: _author.firstName + " " + _author.lastName };


    //Send it to his parent
    this.props.onChange(evnt);
  },
  render: function(){
    var authorsOptions = function(author, i){
      return (<option key={i} value={author.id}>{author.firstName} {author.lastName}</option>);
    };

    var wrapperClass ='form-group';

    var errorResult = this.props.error && this.props.error.length > 0;
    if (errorResult){
      wrapperClass += " " + 'has-error';
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <div className="field">
          <select className="form-control" onChange={this.onChangeHandler} value={this.state.selectValue}>
            <option></option>
            {this.props.authors.map(authorsOptions, this)}
          </select>
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = Dropdown;