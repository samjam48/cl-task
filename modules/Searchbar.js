import React              from 'react';
import {Grid, Row, Col}   from 'react-bootstrap';
import TextField          from 'material-ui/TextField';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

// Search bar component
// takes text input and sends input to handler in parent component


export default  React.createClass({
    render: function () {
        return  (
            <Grid>
                <Row>
                    <br/>
                    <h3>Search for active projects in Labbersville</h3>
                </Row>
                <Row>
                    <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
                        <MuiThemeProvider>
                            <TextField id="searchBar" ref="search" floatingLabelText="Find a project" fullWidth={true} onKeyPress={this.props.onKeyPress}/>
                        </MuiThemeProvider>
                    </Col>
                </Row>
                <br/>
            </Grid>
        )
    }
});