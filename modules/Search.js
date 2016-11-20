import React              from 'react';
import { Link, browserHistory } from 'react-router';
import NavLink            from './NavLink';
import Projects           from './Projects';
import Button             from './Button';
// import Trending_ideas     from './Trending_ideas';

import TextField          from 'material-ui/TextField';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';


// filter projects to show using search

export default React.createClass({
  // getInitialState: function () {
  //   return { searchInput: '' };
  // },

  handleInput: function (event){
    // this.setState( { searchInput: this.refs.search.input.value } )
    // console.log(event.type)
    if(event.key == 'Enter' || event.type == 'click'){
      this.props.history.push('/search/' + this.refs.search.input.value); //render new route with search term
      // console.log('search submitted')
    } 
  },

  // componentWillUpdate: function(){
  // },
  
  render: function () {
    // var DB = this.props.route.initialData
    return (
      <div>
        <h2>Search</h2>
        
        <MuiThemeProvider>
            <TextField ref="search" floatingLabelText="Search for projects" fullWidth={true} onKeyPress={this.handleInput}/>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Button onClick={this.handleInput} text="Search" />
        </MuiThemeProvider>

        <ul role='nav'>
          <li><NavLink activeClassName="active" to='/search/a'>Show All</NavLink></li>
          <li><NavLink activeClassName="active" to='/search/station'>search 'Station'</NavLink></li>
          <li><NavLink activeClassName="active" to='/search/sharing'>search 'sharing'</NavLink></li>
        </ul>

        <div>{this.props.children}</div>

      </div>
      )	
  }
})
