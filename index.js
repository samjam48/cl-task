import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import DB from './config/Db.js';


import App from './modules/App';
import Home from './modules/Home';
import Search from './modules/Search';
import Projects from './modules/Projects';
import Project from './modules/Project';
import Tags from './modules/Tags';
import Trending_ideas from './modules/Trending_ideas';


render((
        <Router history={browserHistory}>
            <Route path='/' component={App} >
                <IndexRoute component={Home}/>
                <Route path='/search' initialData={DB} component={Search} >
                    <Route path='/search/:input' initialData={DB} component={Projects} />
                </Route>
                <Route path='trending' component={Trending_ideas} initialData={DB} component={Trending_ideas} />
            </Route>
        </Router>
    ), document.getElementById('app'))


// <IndexRoute component={Home}/>
//                 <Tags initialData={DB}/>

                    // <Route path='/search/:input' initialData={DB} component={Projects}>
                    //     <Project initialData={DB}/>
                    // </Route>

// var Images = {
//     brain:          <img src={require('./img/brainstorm.jpg')} />,
//     camera:         <img src={require('./img/camera.jpg')} />,
//     forest:         <img src={require('./img/forest.jpg')} />,
//     Labbersville:   <img src={require('./img/Labbersville.png')} />,
//     square:         <img src={require('./img/square.jpg')} />,
//     station:        <img src={require('./img/station.jpg')} />,
//     students:       <img src={require('./img/students.jpg')} />
// }


// class App extends React.Component {
//     constructor(){
//         super();    // get out context
//         this.state = { val: 0};    // set up our state
//         this.update = this.update.bind(this);
//     }
//     update(){
//         this.setState({val: this.state.val + 1 })
//     }
//     componentWillMount(){
//         console.log('Mounting')
//     }
//     render(){
//         console.log('rendering')
//         return <button onClick={this.update}>{ Images[ Object.keys(Images)[ this.state.val ] ] }</button>
//     }
//     componentDidMount(){
//         console.log('Mounted')
//     }
//     componentWillUnmount(){
//         console.log('byeee')
//     }
// }

// class Wrapper extends React.Component {
//     constructor(){
//         super();
//     }
//     mount(){
//         ReactDOM.render(<App />, document.getElementById('a'))
//     }
//     unmount(){
//         ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//     }
//     render(){
//         return (
//             <div>
//                 <button onClick={this.mount.bind(this)}>Mount</button>
//                 <button onClick={this.unmount.bind(this)}>unmount</button>
//                 <div id='a'></div>
//             </div>
//         )
//     }
// }


// ReactDOM.render(
//     < Wrapper />,
//     document.getElementById('app')
// );

// export default Wrapper


// ====== nested data and this.props.children

// import React from 'react'
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     render(){
//         return <Button>I <Heart/> React</Button>
//     }
// }

// class Button extends React.Component {
//     render(){
//         return <button>{this.props.children}</button>
//     }
// }

// const Heart = () => <span className='glyphicon glyphicon-heart'></span>

// ReactDOM.render(
//     <App cat={5} />,
//     document.getElementById('app')
// );

// export default App



// // =====  Set states and reference components ======

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//     constructor() {
//         super();    // gives context for 'this' in our component
//         this.state = { 
//             red: 0,
//             green: 0,
//             blue: 0
//         }
//         this.update = this.update.bind(this)
//     };

//     update(e){
//         this.setState({ 
//             red: ReactDOM.findDOMNode(this.refs.red).value,
//             green: ReactDOM.findDOMNode(this.refs.green).value,
//             blue: ReactDOM.findDOMNode(this.refs.blue).value,
//         })
//     };

//     render(){
//         return (
//             <div>
//                 <Slider ref='red' update={this.update} />
//                 {this.state.red}
//                 <br />
//                 <Slider ref='green' update={this.update} />
//                 {this.state.green}
//                 <br />
//                 <Slider ref='blue' update={this.update} />
//                 {this.state.blue}
//             </div>
//         );
//     }
// }

// class Slider extends React.Component {
//     render(){
//         return (
//             <input type='range' 
//             min='0'
//             max='255'
//             onChange={this.props.update} />
//         );
//     }

// }

// ReactDOM.render(
//     <App cat={5} />,
//     document.getElementById('app')
// );

// export default App



// ==== set properties =======

// import React from 'react'
// import ReactDOM from 'react-dom'

// class App extends React.Component {
//     render(){
//         let txt = this.props.txt
//         return <h1>{txt}</h1>
//     }
// }

// App.propTypes = {               // define the types we are expecting
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//     txt: 'this is the default txt'
// }



// ReactDOM.render(
//     <App cat={5} />,
//     document.getElementById('app')
//     );




// ======= old shit =======

// import { render } from 'react-dom'


// render(
//     <div>
//         <h1>Hello</h1>
//         <b>Bold</b>
//     </div>,
//     document.getElementById('app')
// )

// const App = () => <h1>Hello Eggheads</h1>

// export default app