import React from 'react';
import { State, Router, Link, browserHistory  } from 'react-router';
import Project from './Project';


  // load all Projects sent from search

export default React.createClass({
  mixins: [ State ],

  getInitialState() {
    return { search: this.props.params.input };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({ search: nextProps.params.input })
  },

  componentWillMount() {
    this.setState({ search: this.props.params.input })
  },

  shouldComponentUpdate(nextProps, nextState) {
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

    var searchTerm     = this.state.search; 
    var searchResults  = (searchTerm == "") ?  Object.keys(DB.project)                          // if search term blank load all results
                                            :  this.filterResults( searchTerm.toUpperCase() )   // else get a list of results containing the search term
    
    // map the list of search results onto individual project components and supply the correct data for it to load
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

  // browserHistory.listen(function(event) {
  //   console.log('listen', event.pathname);
  // })

