/**
 * Created by Wilfredo on 02/02/2017.
 */
"use strict";

var React = require('react');

var AuthorForm = require('./authorFrom');

var AuthorActions = require('../../actions/authorActions');

var AuthorStore = require('../../stores/authorStore');

var Router = require('react-router');

var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

  getInitialState: function () {
    return {
      author: {id:'', firstName:'', lastName: ''},
      errors:{}
    };
  },
  setAuthorState: function (event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  validateInput: function (input) {
    var pattern = /^[a-zA-Z0-9äöüÄÖÜ]*$/g;
    console.log('the input is ', pattern.test(input));
    return pattern.test(input);
  },
  authorFormIsValid: function () {
    var formIsValid = true;

    this.state.errors ={}; //Clear previous  errors.

    if(this.state.author.firstName.length < 3 && !this.validateInput(this.state.author.firstName)){
      formIsValid = false;
      this.state.errors.firstName = 'First name must be at least 3 characters';
    }

    if(this.state.author.lastName.length < 3 && this.validateInput(this.state.author.lastName)){
      this.state.errors.lastName = 'Last name must be at least 3 characters';
      formIsValid = false;
    }
    this.setState({errors: this.state.errors});

    return formIsValid;

  },
  saveAuthor: function (event) {
    event.preventDefault();

    if(!this.authorFormIsValid()){
      return;
    }


    if(this.state.author.id){
      AuthorActions.updateAuthor(this.state.author);
    }
    else{
      AuthorActions.createAuthor(this.state.author);
    }
    toastr.success('Author saved.');
    //New way
    Router.browserHistory.push('/authors');

  },
  componentWillMount: function () {
    var authorId = this.props.params.id;
    if(authorId){
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }
  },
  render: function () {
    return(
        <AuthorForm author={this.state.author}
        onChange={this.setAuthorState} onSave={this.saveAuthor} errors={this.state.errors}/>
    );
  }
});

module.exports = ManageAuthorPage;