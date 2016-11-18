import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

// render an idea

// turn into a small google card and display in nice manner

// add info = title, author, createdAt, body


export default React.createClass({

  render() {

    var idea = this.props.idea

    console.log(idea)
    return (
      <div>
        <h4>{idea.title}</h4>
        <p>{idea.body}</p>
      </div>)	
  }
})