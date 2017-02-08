/**
 * Created by Wilfredo on 01/02/2017.
 */
var React = require('react');

var About = React.createClass({
  statics:{
    willTransitionTo: function (transition, params, query, callback) {
      if(!confirm('Are you sure you want to read a page that\'s boring?')){
        transition.abort();
      }
      else{
        callback();
      }
    }
  },
  render:function(){
    return(
      <div>
        <h1>
          About Page
        </h1>
        <p>This app uses the following technologies.</p>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
      </div>
      );
  }
});

module.exports = About;