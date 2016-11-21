import React from 'react';
import { State, Router, Link, browserHistory  } from 'react-router';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Project from './Project';
import TrendingIdeas   from './Trending_ideas';


//  
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
    var searchResults  = (searchTerm == "all") ?  Object.keys(DB.project)                          // if search term blank or "all" then load all results
                                               :  this.filterResults( searchTerm.toUpperCase() )   // else get a list of results containing the search term
    
    // map the list of search results onto individual project components and supply the correct data for it to load
    var projectsToShow = searchResults.map( (id, i) => <Project key={id} project={DB.project[id]} stats={DB.project_stats[id]} /> )

    if(projectsToShow.length < 1)  projectsToShow = ( <div>                
                                                          <h4>Project Not Found</h4>
                                                          <h4>just search 'all' to see every project</h4>
                                                      </div>
                                                    )
                                                    
    return (
        <div>
          <Grid>
            <Row>
              {projectsToShow}
            </Row>
          </Grid>
          <br/>
          <h3>Trending Ideas</h3>
          <TrendingIdeas />
          <br/>
        </div>
    )	
  }
})

  // browserHistory.listen(function(event) {
  //   console.log('listen', event.pathname);
  // })

