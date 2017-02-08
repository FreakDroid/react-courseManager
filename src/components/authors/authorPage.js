/**
 * Created by Wilfredo on 01/02/2017.
 */
"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var Authors = React.createClass({
  getInitialState:function () {
    console.log('Testing ', AuthorStore.getAllAuthors());
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },

  //Clean up when this component is unmounted
  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({authors: AuthorStore.getAllAuthors()})
  },

  render: function () {
    return(
      <div>
        <h1>Authors</h1>

        <Link to="/addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }

});

module.exports = Authors;