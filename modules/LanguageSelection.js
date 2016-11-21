import React  from 'react';


export default React.createClass({

    getInitialState: function (){
        return { language: "english" };
    },

    handleClick: function (event){
        var newLanguage = (event.target.className == "language") ? 
                              (this.state.language == "english") ? "french" :
                              (this.state.language == "french")  ? "german" 
                                                                 : "english" : this.state.language

        this.setState( { language: newLanguage } )
    },

    render: function () {
        let LanguageIcon = this.state.language == "english" ? (
                                                                <img className="language" 
                                                                     src='/img/EnglishIconBlue.jpg' 
                                                                     style={{width: 30, height: 30}} 
                                                                     onClick={this.handleClick} />
                                                              ) :
                           this.state.language == "french"  ? (
                                                                <img className="language" 
                                                                     src='/img/FrenchIconBlue.jpg' 
                                                                     style={{width: 30, height: 30}} 
                                                                     onClick={this.handleClick}/>
                                                              ) : (
                                                                <img className="language" 
                                                                     src='/img/GermanIconBlue.jpg' 
                                                                     style={{width: 30, height: 30}} 
                                                                     onClick={this.handleClick}/>
                                                              )

        return(
            <span className="navItem">
                {LanguageIcon}
            </span>
        )
    }
})


// // material-ui controlled dropdown Menu - Implement if needed

// import React, {Component} from 'react';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
// import RaisedButton from 'material-ui/RaisedButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import ContentFilter from 'material-ui/svg-icons/content/filter-list';
// import FileFileDownload from 'material-ui/svg-icons/file/file-download';
// import getMuiTheme   from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// export default class LanguageSelection extends Component {
//   state = {
//     valueSingle: '1'
//   };

//   handleChangeSingle = (event, value) => {
//     this.setState({
//       valueSingle: value
//     });
//   };

//   handleOpenMenu = () => {
//     this.setState({
//       openMenu: true
//     });
//   }

//   handleOnRequestChange = (value) => {
//     this.setState({
//       openMenu: value
//     });
//   }

//   render() {
//     return (
//         <IconMenu
//             iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
//             onChange={this.handleChangeSingle}
//             value={this.state.valueSingle}
//         >
//             <MenuItem value="1" primaryText="English" />
//             <MenuItem value="2" primaryText="French" />
//             <MenuItem value="3" primaryText="German" />
//         </IconMenu>
//     )
//   }
// }

// // Simple example...

// const LangugeSelection = () => (
//     <IconMenu
//       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
//       anchorOrigin={{horizontal: 'left', vertical: 'top'}}
//       targetOrigin={{horizontal: 'left', vertical: 'top'}}
//     >
//       <MenuItem primaryText="Refresh" />
//       <MenuItem primaryText="Send feedback" />
//       <MenuItem primaryText="Settings" />
//       <MenuItem primaryText="Help" />
//       <MenuItem primaryText="Sign out" />
//     </IconMenu>
// );

// export default LangugeSelection;