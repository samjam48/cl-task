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


  componentWillReceiveProps() {
    this.setState({
      search: this.props.params.input
    })
  },

  componentWillMount() {
    this.setState({
      search: this.props.params.input
    })
  },

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== this.nextState
  },


  filterResults(search) {
    var projectKeysArray = Object.keys(DB.project);
    var searchResults    = projectKeysArray.filter( (key) => DB.project[key].title.toUpperCase().indexOf(search) != -1 );
    return searchResults;
  },
  
  render() {
    this.props.route.initialData(); // initialise DB
    var searchTerm     = this.state.search; // this.props.params.input;
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

