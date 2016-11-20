import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'


export default React.createClass({
  render() {
    return (
        <div>
            <img id='logo' src={require('../img/Labbersville.jpg')} />
            <ul role='nav'>
                <li><NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink></li>
                <li><NavLink activeClassName="active" to='/search'>Search</NavLink></li>
                <li><NavLink activeClassName="active" to='/trending'>Trending</NavLink></li>
            </ul>
            <div>{this.props.children}</div>
        </div>
      )
  }
})
 
