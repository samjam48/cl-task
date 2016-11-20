import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// Load a button with given label
// Handle this.button click events in parent class

var Button = React.createClass({
  render: function () {
    return  <RaisedButton label={this.props.text} onClick={this.props.onClick}/>
  }
});
 
export default Button;