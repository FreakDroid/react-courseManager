/**
 * Created by Wilfredo on 01/02/2017.
 */
"user strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function () {
      return (
        <div className="jumbotron">
          <h1>
            Pluralsight Adminitration
          </h1>
          <p>React, React Router, and flux for ultra responsive web apps</p>
          <Link to="/about" className="btn btn-primar btn-lg" >Learn More </Link>
        </div>
      );
    }
});

module.exports = Home;