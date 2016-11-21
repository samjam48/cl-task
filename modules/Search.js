import React              from 'react';
import {browserHistory}   from 'react-router';
import Projects           from './Projects';
import Searchbar          from './Searchbar';




// filter projects to show using search

export default React.createClass({
    handleInput: function (event){
        if(event.key == 'Enter'){                                                                // when search button clicked or user hits enter in search box
            this.props.history.push('/search/' + this.refs.searchbar.refs.search.input.value);   // render new route with search term
        } 
    },

  render: function () {
    return (
      <div>
          <Searchbar ref="searchbar" onKeyPress={this.handleInput}/>

          <div>
            {this.props.children}
          </div>

      </div>
    )	
  }
})
