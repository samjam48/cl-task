import React            from 'react'
import Searchbar        from './Searchbar';
import {browserHistory} from 'react-router';

// Show welcome text when user goes to access the site

export default React.createClass({
    handleInput: function (event){
        if(event.key == 'Enter'){                                                                // when search button clicked or user hits enter in search box
            this.props.history.push('/search/' + this.refs.searchbar.refs.search.input.value);   // render new route with search term
        } 
    },

    render() {
      return (
        <div>
          <div>
            <br/>
              <h1>Welcome to the participation platform of Labbersville.</h1>
              <br/>
              <h2>This site is dedicated to every citizen.</h2>
            <br/>
              <p>Together, we want to combine our strengths in order to collaboratively improve our city.</p>
              <p> Step by step, idea by idea, citizen by citizen! Help us out!</p>
          </div>
          <div>
              <Searchbar ref="searchbar" onKeyPress={this.handleInput} />
          </div>
        </div>
      )
    }
})







