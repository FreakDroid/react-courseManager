/**
 * Created by Wilfredo on 01/02/2017.
 */
/**
 * Created by Wilfredo on 01/02/2017.
 */
"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var AuthorsActions = require('../../actions/authorActions');
var toastr = require('toastr');



var AuthorsList = React.createClass({
  propTypes:{
    authors: React.PropTypes.array.isRequired
  },

  deleteAuthor: function(id, event){
      event.preventDefault();
      console.log('id ', id);
      AuthorsActions.deleteAuthor(id);
      toastr.success('Author Deleted');
  },

  render: function () {
    var createAuthorRow= function (author) {
      return(
        <tr key={author.id}>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
          <td><Link to={`/addAuthor/${author.id}`}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      )
    };
    return(
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>Delete</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorsList;