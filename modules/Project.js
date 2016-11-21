import React            from 'react'
import { Link }         from 'react-router'
import { Grid, Row, Col,  } from 'react-bootstrap';

import Toggle           from 'material-ui/Toggle';
import Divider          from 'material-ui/Divider';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import baseTheme        from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton       from 'material-ui/FlatButton';
import LinearProgress   from 'material-ui/LinearProgress';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



// Component renders a single project 
  // requires project details and project stats to be passed in via props from projects.js

  // material-ui card used




// Optional TO DO

// Change date display to have a progress bar showing from start to end.
// make into a paper element ??




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
    var importance = Math.round(project.importance * 100)
    return (

      <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={5} mdOffset={1} lg={4} lgOffset={0} >
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
              <br/>
              
              Importance Rating:   {importance}
              <LinearProgress mode="determinate" value={importance} />
              <br/>

              <Table >
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
                    <TableRow>
                      <TableHeaderColumn>Activity:</TableHeaderColumn>
                      <TableHeaderColumn>Users</TableHeaderColumn>
                      <TableHeaderColumn>Ideas</TableHeaderColumn>
                      <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn>{stats.users}</TableRowColumn>
                      <TableRowColumn>{stats.ideas}</TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                    </TableRow>
                  </TableBody>
              </Table>
              <br/>
             <Table >
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
                    <TableRow>
                      <TableHeaderColumn>Views:</TableHeaderColumn>
                      <TableHeaderColumn>Week</TableHeaderColumn>
                      <TableHeaderColumn>Month</TableHeaderColumn>
                      <TableHeaderColumn>Year</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn>{stats.views.week}</TableRowColumn>
                      <TableRowColumn>{stats.views.month}</TableRowColumn>
                      <TableRowColumn>{stats.views.year}</TableRowColumn>
                    </TableRow>
                  </TableBody>
              </Table>
              <br/>
             <Table >
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
                    <TableRow>
                      <TableHeaderColumn>Start Date</TableHeaderColumn>
                      <TableHeaderColumn>End Date</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableRowColumn>{project.startAt}</TableRowColumn>
                      <TableRowColumn>{project.endAt}</TableRowColumn>
                    </TableRow>
                  </TableBody>
              </Table>

            </CardText>

            <CardActions  expandable={true} >
              <FlatButton  label="Project Page" primary={true} href={'/project/' + project.id}/>
            </CardActions>

          </Card>
        </MuiThemeProvider>
      </div>
      </Col>
    )	
  }
}