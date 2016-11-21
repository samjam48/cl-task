import React             from 'react';
import NavLink           from './NavLink';
import LogInStatus       from './LogInStatus';
import LanguageSelection from './LanguageSelection';

import SwapVert          from 'material-ui/svg-icons/action/swap-vert';
import ActionHome        from 'material-ui/svg-icons/action/home';
import getMuiTheme       from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';

// on landing show navbar at bottom with banner image across page initially. 
    // transition navbar to top when clicked and banner dissapears
    // transition back to bottom if labbersville  icon clicked

// displays projects, home nav, language option and user log in status


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
        
        let landingBanner  = this.state.landingView ? <img id='banner' src='/img/Labbersville.jpg' /> : <br/>

        let navIcon = this.state.landingView ? (
                                                <NavLink id="dropIconNav" onlyActiveOnIndex={true} onClick={this.handleClick} to='/welcome' >
                                                    <MuiThemeProvider> 
                                                        <SwapVert className="navIcon" color='#429dc0' style={{width: 50, height: 50, padding:5}} /> 
                                                    </MuiThemeProvider>
                                                </NavLink>
                                                )
                                             : (
                                                <NavLink id="labbersvileIcon" onlyActiveOnIndex={true} onClick={this.handleClick} to='/' >
                                                    <img id="labbersvilleIcon"  src='/img/LabbersvilleIcon.jpg' />
                                                </NavLink>
                                                )

        return(
            <div>
                {landingBanner}
                <div id="navigation" className={"grey " + navBarPosition} >	
                    <div className="nav nav-left">
                        <LanguageSelection />
                        <NavLink id="projectsNav" activeclassNameName="active" className="navItem" onClick={this.handleClick} to='/search/a' >Projects</NavLink>
                    </div>
                    <div className="nav nav-center" >
                        {navIcon}
                    </div>
                    <div className="nav nav-right" >
                        <LogInStatus />
                    </div>
                </div>
            </div>
        )
    }
})

