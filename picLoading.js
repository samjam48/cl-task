import React from 'react'
import ReactDOM from 'react-dom';

var Images = {
    brain:          <img src={require('./img/brainstorm.jpg')} />,
    camera:         <img src={require('./img/camera.jpg')} />,
    forest:         <img src={require('./img/forest.jpg')} />,
    Labbersville:   <img src={require('./img/Labbersville.png')} />,
    square:         <img src={require('./img/square.jpg')} />,
    station:        <img src={require('./img/station.jpg')} />,
    students:       <img src={require('./img/students.jpg')} />
}


class App extends React.Component {
    constructor(){
        super();    // get out context
        this.state = { val: 0};    // set up our state
        this.update = this.update.bind(this);
    }
    update(){
        this.setState({val: this.state.val + 1 })
    }
    componentWillMount(){
        console.log('Mounting')
    }
    render(){
        console.log('rendering')
        return <button onClick={this.update}>{ Images[ Object.keys(Images)[ this.state.val ] ] }</button>
    }
    componentDidMount(){
        console.log('Mounted')
    }
    componentWillUnmount(){
        console.log('byeee')
    }
}

class Wrapper extends React.Component {
    constructor(){
        super();
    }
    mount(){
        ReactDOM.render(<App />, document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>unmount</button>
                <div id='a'></div>
            </div>
        )
    }
}


ReactDOM.render(
    < Wrapper />,
    document.getElementById('app')
);

export default Wrapper
