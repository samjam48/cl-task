import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


import SearchBar from './SearchBar'
import Button from './Button'
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import Projects from './Projects';
import Trending_ideas from './Trending_ideas';
// import Autocomplete from './Autocomplete'
import TextField from 'material-ui/TextField';


function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

// filter projects to show using search


export default React.createClass({
  
  render() {
    var DB = this.props.route.initialData
    console.log(DB)
    return (
      <div>
        <h2>Search</h2>


        <MuiThemeProvider>
            <TextField id="search" floatingLabelText="Search for projects" fullWidth={true}/>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Button />
        </MuiThemeProvider>
        <ul>
        </ul>
        <Projects initialData={DB}/>
        <Trending_ideas initialData={DB}/>
      </div>
      )	
  }
})


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


        // <MuiThemeProvider>
        //   <AppBar>

        //     <input type='text' placeholder='Search something cool'></input>
        //   </AppBar>
        // </MuiThemeProvider>
