/**
 * Created by Wilfredo on 01/02/2017.
 */
"user strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NotFoundPage = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>
          Page not Found
        </h1>
        <p>Whoops! Sorry, there is nothing to see here.</p>
        <Link to="/about" className="btn btn-primar btn-lg" >Learn More </Link>
      </div>
    );
  }
});

module.exports = NotFoundPage;