// // import React, {Component} from 'react';
// // import JSONP              from 'jsonp';
// // import { Autocomplete }   from 'material-ui';
// // import getMuiTheme        from 'material-ui/styles/getMuiTheme';
// // import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';



// import React from 'react';
// import AutoComplete from 'material-ui/AutoComplete';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// injectTapEventPlugin();

// export default class AutoComplete extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       dataSource: [],
//     };
//   }

//   handleUpdateInput = function(value){
//     this.setState({
//       dataSource: [
//         value,
//         value + value,
//         value + value + value,
//       ],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <AutoComplete
//           hintText="Type anything"
//           dataSource={this.state.dataSource}
//           onUpdateInput={this.handleUpdateInput}
//         />
//         <AutoComplete
//           hintText="Type anything"
//           dataSource={this.state.dataSource}
//           onUpdateInput={this.handleUpdateInput}
//           floatingLabelText="Full width"
//           fullWidth={true}
//         />
//       </div>
//     );
//   }
// }
