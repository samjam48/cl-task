import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'

export default React.createClass({

  render() {
    return (
    	<div>
            <h1>Welcome to the participation platform of Labbersville.</h1>
            <h2>This site is dedicated to every citizen.</h2>
            <p>Together, we want to combine our strengths in order to collaboratively improve our city.</p>
            <p> Step by step, idea by idea, citizen by citizen! Help us out!</p>
    
            <div>{this.props.children}</div>
        </div>
        )
  }
})







