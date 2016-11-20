import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Trending_idea from './Trending_idea'


export default React.createClass({
  

  // load all Trending ideas

  render() {
    // var DB = this.props.initialData
    var DB = this.props.route.initialData // load DB
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

      </div>)	
  }
})

        // {this.props.children}