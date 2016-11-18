import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

// render a project

// turn into a google card and display in nice manner

// add info = title, description, startAt, endAt, importance, img

// add stats = users, ideas, views.week, views.month, views.year
// tables within cards https://material.google.com/components/data-tables.html#data-tables-tables-within-cards

// extra info = region, languages, moderators
// Note: region = geo-JSON data


export default React.createClass({

  render() {

    var project = this.props.project
    var stats = this.props.stats

    console.log(project)
    return (
      <div>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <p>Users: {stats.users}, Views this year: {stats.views.year}</p>
      </div>)	
  }
})