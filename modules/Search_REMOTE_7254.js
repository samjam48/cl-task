import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Button from './Button'
import TextField from 'material-ui/TextField';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import Projects from './Projects';
import Trending_ideas from './Trending_ideas';

// import IconButton from 'material-ui/IconButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import FlatButton from 'material-ui/FlatButton';
// import SearchBar from './SearchBar'
// import AppBar from 'material-ui/AppBar';
// import Autocomplete from './Autocomplete'


// filter projects to show using search



export default React.createClass({
  getInitialState: function () {
    return { search: '' };
  },

  handleInput: function (){
    this.state.search = this.refs.search.input.value
    console.log(this.state.search);
  },
  
  render: function () {
    var DB = this.props.route.initialData
    var search = this.state.search
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
          <li><NavLink activeClassName="active" to='/search/:name'>Show All</NavLink></li>
          <li><NavLink activeClassName="active" to='/search/station'>Station</NavLink></li>
          
        </ul>
        <div>{this.props.children}</div>


        
      </div>
      )	
  }
})
        // <Trending_ideas initialData={DB}/>
        // <Projects initialData={DB} search={search}/>


        // <NavLink to='/search/:input'>Search for projects</NavLink>


//               title="Title"
//               onTitleTouchTap={handleTouchTap}
//               iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//               iconElementRight={<FlatButton label="Search" />}>

// <SearchBar/>
//         <form >	
//         		<textarea name="blogText" rows="2" cols="40"></textarea>
//         	  <button type='submit'> Search </button>
//         	</form>


// function handleTouchTap() {
//   alert('onTouchTap triggered on the title component');
// }

// const styles = {
//   title: {
//     cursor: 'pointer',
//   },
// };

        // <MuiThemeProvider>
        //   <AppBar>

        //     <input type='text' placeholder='Search something cool'></input>
        //   </AppBar>
        // </MuiThemeProvider>
