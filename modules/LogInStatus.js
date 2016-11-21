import React         from 'react';
// import NavLink       from './NavLink';
// import { IndexLink } from 'react-router';

import AccountCircle    from 'material-ui/svg-icons/action/account-circle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default React.createClass({

    getInitialState: function (){
        return { logInStatus : false};
    },

    handleClick: function (event){
        var newLogInStatus = ( event.target.id == "changeLogIn" )? !this.state.logInStatus
                                                                 :  this.state.logInStatus
        this.setState( { logInStatus: newLogInStatus } )
    },

    render: function () {

        let logInIconColor = this.state.logInStatus ? '#429dc0' : '#7f7377'

        let logInButtons   = this.state.logInStatus ?(
                                                      <span>
                                                        <a onClick={this.handleClick} className="navItem" >Edit-User</a>
                                                        <a onClick={this.handleClick} className="navItem" id="changeLogIn" >Log-Out</a>
                                                      </span>
                                                     ):(
                                                      <a onClick={this.handleClick} className="navItem" id="changeLogIn" >Log-In</a>
                                                     )

        return(
            <span>
                {logInButtons}
                <MuiThemeProvider> 
                   <AccountCircle className="navItem" color={logInIconColor} style={{width: 30, height: 30, padding:0}} /> 
                </MuiThemeProvider>
            </span>
        )
    }
})