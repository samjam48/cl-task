import React from 'react';
import { Link } from 'react-router';
import Project from './Project';

// import NavLink from './NavLink'

  // load all Projects sent from search

export default React.createClass({
  // constructor(){
  //       super();    // get out context
  //       this.state = { search: this.props.params.input };    // set up our state
  //       // this.update = this.update.bind(this);
  // }

  getInitialState() {
    return { search: this.props.params.input };
  },

  handleSearch() {
    this.setState({ search: this.props.params.input })
  },

  filterResults(search) {
    // console.log(search)
    // var titles = Object.values(DB.project).map( (project) => project.title)
    // console.log('titles')
    // console.log(titles)
    console.log(search)
    console.log(DB.project)
    for(var key in DB.project){console.log(key)}
    console.log(Object.keys(DB.project))
    // console.log(DB.project[1].title.toUpperCase())
    var filtered = Object.keys(DB.project).filter( (key) => DB.project[key].title.toUpperCase().indexOf(search) != -1 )
    console.log(filtered)
    return filtered
  },
  
  render() {
    this.props.route.initialData()
    console.log(DB)
    // var search = this.props.params.input
    var search = this.state.search
    console.log(search)
    search == "" || search == ":name" ? search = Object.keys(DB.project) 
                 : search = this.filterResults( search.toUpperCase() )
    // var stats = DB.project_stats
    // console.log(DB.project_stats[1])
    var projects = []
    for(var i in search){
        var proj = DB.project[search[i]]
        var stat = DB.project_stats[search[i]]
        projects.push( <Project key={search[i]} project={proj} stats={stat} /> )
    }
    return (
      <div>
        <h2>Projects PLACEHOLDER title</h2>
        <ul>
          {projects}
        </ul>
      </div>)	
  }
})

// export {Projects}

//  {this.props.routes[1].database}

// {proj.title} </ Project>
        // <ul>
        //    {list}
        // </ul>
        // {this.props.children}