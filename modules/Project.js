import React            from 'react'
import { Link }         from 'react-router'
import Button           from './Button'

import Toggle           from 'material-ui/Toggle';
import Divider          from 'material-ui/Divider';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import baseTheme        from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton       from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



// Component renders a single project 
  // requires project details and project stats to be passed in via props


// TO DO

// add info = title, description, startAt, endAt, importance, img
  // progress bar for start, end date
  // progress bar for importance

// add stats:
  // table: users, ideas
  // views table: views.week, views.month, views.year

// make into a paper element ??

// extra info = region, languages, moderators
  // Note: region = geo-JSON data



export default class Project extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  };

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };


  render() {

    var project = this.props.project
    var stats = this.props.stats
 
    return (
      <div className="projectCard">
        <MuiThemeProvider>
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
              <CardMedia 
                overlay={<CardTitle title={project.title} subtitle={project.description} />} 
                 >
              <img src={'/img/' + project.img} />
            </CardMedia>

            <CardActions>
              <Toggle
                  toggled={this.state.expanded}
                  onToggle={this.handleToggle}
                  labelPosition="right"
                  label="Details"
                />
            </CardActions>

            <CardText  expandable={true} >

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

            <CardActions  expandable={true} >
              <FlatButton  label="Project Page" href={'/project/' + project.id}/>
            </CardActions>

          </Card>
        </MuiThemeProvider>
      </div>
    )	
  }
}