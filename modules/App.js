import React from 'react'
// import { Link } from 'react-router'
import NavBar   from './NavBar';



export default React.createClass({
  render() {
    return (
        <div>
            <img id='logo' src='/img/Labbersville.jpg' />
            <NavBar />
            <div>{this.props.children}</div>
        </div>
      )
  }
})
 
