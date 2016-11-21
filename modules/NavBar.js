import React             from 'react';
// import { IndexLink }     from 'react-router';
import NavLink           from './NavLink';
import LogInStatus       from './LogInStatus';
import LanguageSelection from './LanguageSelection';

import TextField         from 'material-ui/TextField';
import SwapVert          from 'material-ui/svg-icons/action/swap-vert';
import ActionHome        from 'material-ui/svg-icons/action/home';
import getMuiTheme       from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';

// show navbar at bottom initially. 
    // transition to top when clicked
    // transition back to bottom if logo icon clicked

// LogIn
    // on load show log in button and user icon
    // if clicked show log-out button and edit button

// color change: (use grey or lightblue)
    // for language selection between EN / FR
    // user icon logged in or out

// colors = labbersville colours
    // lightblue = #429dc0
    // darkblue  = #13698b
    // lightpeach = #e6a3ac
    // midpeach = #e6a3ac
    // stonepeach = #936577
    // greypeach = #d65b68
    // grey = #7f7377

export default React.createClass({
    getInitialState: function (){
        return { landingView : true };
    },

    handleClick: function (event){
        var landingState =  (event.target.id == "labbersvilleIcon") ? true : false 
        this.setState( { landingView: landingState } )
    },


    render: function () {
        
        let navBarPosition = this.state.landingView ? "bottom" : "top"
        
        let landingLogo    = this.state.landingView ? <img id='logo' src='/img/Labbersville.jpg' /> : <br/>

        let navIcon = this.state.landingView ? (
                                                <NavLink id="navIcon" onlyActiveOnIndex={true} onClick={this.handleClick} to='/welcome' >
                                                    <MuiThemeProvider> 
                                                        <SwapVert className="navIcon" color='#429dc0' style={{width: 50, height: 50, padding:5}} /> 
                                                    </MuiThemeProvider>
                                                </NavLink>
                                                )
                                             : (
                                                <NavLink id="navIcon" onlyActiveOnIndex={true} onClick={this.handleClick} to='/' >
                                                    <img id="labbersvilleIcon"  src='/img/LabbersvilleIcon.jpg' />
                                                </NavLink>
                                                )

        return(
            <div>
                {landingLogo}
                <div id="navigation" className={"grey " + navBarPosition} >	
                    <div className="nav nav-left">
                        <NavLink activeclassNameName="active" className="navItem" onClick={this.handleClick} to='/search'>Search</NavLink>
                        <NavLink activeclassNameName="active" className="navItem" onClick={this.handleClick} to='/trending'>Trending</NavLink>
                    </div>
                    <div className="nav nav-center" >
                        {navIcon}
                    </div>
                    <div className="nav nav-right">
                        <LogInStatus />
                        <LanguageSelection />
                    </div>
                </div>
            </div>
        )
    }
})