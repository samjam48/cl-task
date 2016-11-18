import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';


export default React.createClass({
  render() {
    return (
          	<div>
            <ul role='nav'>
                <li><NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink></li>
                <li><NavLink activeClassName="active" to='/search'>search</NavLink></li>
            </ul>
            <div>{this.props.children}</div>
        </div>
        )
  }
})



        // <MuiThemeProvider>
        //   <MyAwesomeReactComponent />

        // </MuiThemeProvider>
 


// const App = (props) => (

// );
 
