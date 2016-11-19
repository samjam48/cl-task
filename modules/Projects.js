import React from 'react';
import { State, Router, Link, browserHistory  } from 'react-router';
import Project from './Project';

// import Button             from './Button'
// import TextField          from 'material-ui/TextField';
// import getMuiTheme        from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

// import NavLink from './NavLink'

  // load all Projects sent from search

  // browserHistory.listen(function(event) {
  //   console.log('listen', event.pathname);
  // })

export default React.createClass({
  mixins: [ State ],

  getInitialState() {
    return { search: this.props.params.input };
  },


  componentWillReceiveProps() {
    this.setState({
      search: this.props.params.input
      //range: this.getQuery().range
    })
  },

  componentWillMount() {
    this.setState({
      search: this.props.params.input
      //range: this.getQuery().range

    })
  },

  shouldComponentUpdate() {
    //console.log(this.nextState)
    return true
    //return this.state.search !== this.nextState.search
    // return this.state.range !== nextState.range
  },



  handleSearch() {
    this.setState({ search: this.props.params.input })
  },



  filterResults(search) {
    // console.log(search)

    // console.log(search)
    // console.log(DB.project)
    // for(var key in DB.project){console.log(key)}
    // console.log(Object.keys(DB.project))
    // console.log(DB.project[1].title.toUpperCase())
    var filtered = Object.keys(DB.project).filter( (key) => DB.project[key].title.toUpperCase().indexOf(search) != -1 )
    // console.log(filtered)
    return filtered
  },
  
  render() {
    this.props.route.initialData() // load DB
    // console.log(DB)
    var search = this.props.params.input
    // console.log(search)
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