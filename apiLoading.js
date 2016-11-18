
import React from 'react'
import ReactDOM from 'react-dom'
var projectStats = require('./api/project_stats.json')
var projects = require('./api/projects.json')
var tags = require('./api/tags.json')
var trending_ideas = require('./api/trending_ideas.json')

console.log(trending_ideas)
console.log('trending_ideas[0].author')

class App extends React.Component {
    render(){
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}

App.propTypes = {               // define the types we are expecting
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is the default txt'
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
    );