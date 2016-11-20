import React from 'react'
import { Link } from 'react-router'

import Button             from './Button'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Divider from 'material-ui/Divider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';

import NavLink from './NavLink'

// render a project

// turn into a google card and display in nice manner
// make into a paper element
// make extra info an expandable option

// add info = title, description, startAt, endAt, importance, img

// add stats = users, ideas, views.week, views.month, views.year
// tables within cards https://material.google.com/components/data-tables.html#data-tables-tables-within-cards

// extra info = region, languages, moderators
// Note: region = geo-JSON data
   // students:       <img src={require('./img/students.jpg')} />







var Project = React.createClass({

  // getChildContext() {
  //   return { muiTheme: getMuiTheme(baseTheme) };
  // },

  render() {

    var project = this.props.project
    var stats = this.props.stats
    console.log(project.img)

    // console.log(project)
    return (
      <div>
        <img src={'/img/' + project.img} />

        <MuiThemeProvider>
          <Card>
            <CardTitle title={project.title} subtitle={project.description} />
            <CardText >
              <Divider />
              <Table >
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
                    <TableRow>
                      <TableHeaderColumn>Users</TableHeaderColumn>
                      <TableHeaderColumn>Ideas</TableHeaderColumn>
                      <TableHeaderColumn>Views this week</TableHeaderColumn>
                      <TableHeaderColumn>Views this month</TableHeaderColumn>
                      <TableHeaderColumn>Views this year</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableRowColumn>{stats.users}</TableRowColumn>
                      <TableRowColumn>{stats.ideas}</TableRowColumn>
                      <TableRowColumn>{stats.views.week}</TableRowColumn>
                      <TableRowColumn>{stats.views.month}</TableRowColumn>
                      <TableRowColumn>{stats.views.year}</TableRowColumn>
                    </TableRow>
                  </TableBody>
              </Table>
            </CardText>
            <CardActions >
              <FlatButton label="Project Page" href={'/project/' + project.id}/>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    )	
  }
})
export default Project;


// // simple card example

// const CardExampleWithAvatar = () => (
//   <Card>
//     <CardHeader
//       title="URL Avatar"
//       subtitle="Subtitle"
//       avatar="images/jsa-128.jpg"
//     />
            // <CardMedia
            //   overlay={<CardTitle title={project.title} subtitle={project.description} />}
            // >
            //   <img src={require('../img/students.jpg')} />
            // </CardMedia>
//     <CardTitle title="Card title" subtitle="Card subtitle" />
//     <CardText>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//     </CardText>
//     <CardActions>
//       <FlatButton label="Action1" />
//       <FlatButton label="Action2" />
//     </CardActions>
//   </Card>
// );

// export default CardExampleWithAvatar;











// // controlled expandable example

// export default class Project extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: false,
//     };
//   };

//   handleExpandChange = (expanded) => {
//     this.setState({expanded: expanded});
//   };

//   handleToggle = (event, toggle) => {
//     this.setState({expanded: toggle});
//   };

//   handleExpand = () => {
//     this.setState({expanded: true});
//   };

//   handleReduce = () => {
//     this.setState({expanded: false});
//   };

//   render() {

//     var project = this.props.project
//     var stats = this.props.stats
//     console.log(project.image)

//     // console.log(project)
//     return (
//       <div>
//         <MuiThemeProvider>
//           <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
//             <CardHeader
//               title="URL Avatar"
//               subtitle="Subtitle"
//               actAsExpander={true}
//               showExpandableButton={true}
//             />
//             <CardTitle title={project.title} subtitle={project.description} />            />
//             <CardText >
//               <Toggle
//                 toggled={this.state.expanded}
//                 onToggle={this.handleToggle}
//                 labelPosition="right"
//                 label="This toggle controls the expanded state of the component."
//               />
//               Users: {stats.users}, Views this year: {stats.views.year}
//             </CardText>
//             <CardActions expandable={true}>
//               <FlatButton label="Action1" />
//               <FlatButton label="Action2" />
//             </CardActions>
//           </Card>
//         </MuiThemeProvider>
//       </div>
//     )	
//   }
// }