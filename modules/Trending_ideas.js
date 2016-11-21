import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Trending_idea from './Trending_idea'
  

  // load all Trending ideas

export default React.createClass({
  render() {
    var ideas = []
    for(var i in DB.trending_ideas){
        var Idea = DB.trending_ideas[i]
        ideas.push(<Trending_idea key={i} idea={Idea} />)
    }
    return (
      <div>
        <h2>Idea's</h2>
        <ul>
           {ideas}
        </ul>
      </div>
    )	
  }
})