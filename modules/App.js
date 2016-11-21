import React from 'react'
import NavBar   from './NavBar';


// load all page components

export default React.createClass({
  render() {
    return (
        <div>
            <NavBar />
            <div>{
              this.props.children}
            </div>
        </div>
      )
  }
})
 

// transition stuff - Not implemented

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//     <ReactCSSTransitionGroup
//       transitionName="example"
//       transitionAppear={true}
//       transitionAppearTimeout={500}
//       transitionEnter={false}
//       transitionLeave={false}>
//     </ReactCSSTransitionGroup>
            // <Container>
            // </Container>
            