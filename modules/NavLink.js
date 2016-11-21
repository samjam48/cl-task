import React from 'react'
import { Link } from 'react-router'

// changes link status to active and back so user knows navigatoin link is clickable

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})