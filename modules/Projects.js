import React from 'react';
import { State, Router, Link, browserHistory  } from 'react-router';
import Project from './Project';

// import Button             from './Button'
// import TextField          from 'material-ui/TextField';
// import getMuiTheme        from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
// import NavLink from './NavLink'


  // load all Projects sent from search


export default React.createClass({
  mixins: [ State ],

  getInitialState() {
    return { search: this.props.params.input };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      search: nextProps.params.input
    })
  },

  componentWillMount() {
    // console.log('Mounting')
    this.setState({
      search: this.props.params.input
    })
  },

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state)
    console.log(nextState)
    return this.state !== nextState
  },


  filterResults(search) {
    var projectKeysArray = Object.keys(DB.project);
    var searchResults    = projectKeysArray.filter( function(key){  // return projects with search term in title or description
                                                   return DB.project[key].title.toUpperCase().indexOf(search) != -1 ||
                                                          DB.project[key].description.toUpperCase().indexOf(search) != -1 
                                                   });
    return searchResults;
  },
  
  render() {
    // console.log('project state search:')
    // console.log(this.state.search)
    // console.log('project params:')
    // console.log(this.props.params.input)

    var DB = this.props.route.initialData; // initialise DB

    var searchTerm     = this.state.search; // this.props.params.input; // 
    var searchResults  = (searchTerm == "") ?  Object.keys(DB.project)                          // if search term blank load all results
                                            :  this.filterResults( searchTerm.toUpperCase() )   // else get a list of results containing the search term
    
    var projectsToShow = searchResults.map( (id) => <Project key={id} project={DB.project[id]} stats={DB.project_stats[id]} /> )

    return (
      <div>
        <h2>_Projects_PLACEHOLDER_title</h2>
        <ul>
            {projectsToShow}
        </ul>
      </div>)	
  }
})

// export {Projects}

  // browserHistory.listen(function(event) {
  //   console.log('listen', event.pathname);
  // })

