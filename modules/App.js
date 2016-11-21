import React from 'react'
import NavBar   from './NavBar';

// load page components

export default React.createClass({
  render() {
    return (
        <div>
            <NavBar />
            <div>{this.props.children}</div>
        </div>
      )
  }
})
 
