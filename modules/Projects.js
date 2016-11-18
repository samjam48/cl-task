import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Project from './Project'

export default React.createClass({
  

  // load all Projects sent from search


  render() {

    this.props.initialData()
    // var stats = DB.project_stats
    // console.log(DB.project_stats[1])

    var projects = []
    for(var i in DB.project){
        var proj = DB.project[i]
        var stat = DB.project_stats[i]
        projects.push( <Project key={i} project={proj} stats={stat} /> )
    }
    return (
      <div>
        <h2>Projects Placeholder title</h2>
        <ul>
          {projects}
        </ul>
      </div>)	
  }
})

//  {this.props.routes[1].database}

// {proj.title} </ Project>
        // <ul>
        //    {list}
        // </ul>
        // {this.props.children}