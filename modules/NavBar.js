import React         from 'react';
// import { render }    from 'react-dom';
import NavLink       from './NavLink';
import { IndexLink } from 'react-router'
import TextField     from 'material-ui/TextField';
import SwapVert      from 'material-ui/svg-icons/action/swap-vert';
import ActionHome    from 'material-ui/svg-icons/action/home'
import getMuiTheme   from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const NavBar = () => (
        <div id="navigation" className="red sticktobottom">	
            <div className="nav nav-left">
                <NavLink activeclassNameName="active" to='/search'>Search</NavLink>
                <span className="item stitch">&nbsp;</span>
                <span className="item stitch">&nbsp;</span>
                <NavLink activeclassNameName="active" to='/trending'>Trending</NavLink>
            </div>
            <div className="nav nav-center" >
                <NavLink onlyActiveOnIndex={true} to='/'>
                    <img id="logo" src='/img/LabbersvilleLogo.jpg' />
                    <MuiThemeProvider>
                        <SwapVert  />       
                    </MuiThemeProvider>
                </NavLink>
            </div>
            <div className="nav nav-right">
                <a className="item" href="#_clients">Edit</a>
                <span className="item stitch">&nbsp;</span>
                <a className="item" href="#_contact">Log In/Out</a>
                <span id="Language">Lang</span>
            </div>
        </div>
);

export default NavBar;

