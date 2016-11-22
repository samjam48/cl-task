import React                from 'react';
import IconButton           from 'material-ui/IconButton';
import Subheader            from 'material-ui/Subheader';
import StarBorder           from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col}     from 'react-bootstrap';

// render a side scroll grid of the trending idea's in the database'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

const TrendingIdeas = () => (
    <Grid>
      <Row>
        <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
          <MuiThemeProvider> 
            <div style={styles.root}>
              <GridList style={styles.gridList} cols={2.2}>
                {Object.keys(DB.trending_ideas).map((key) => (
                  <GridTile
                    key={key}
                    title={DB.trending_ideas[key].title}
                    subtitle={<span>by <b>{DB.trending_ideas[key].author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                  >
                    <img src={'/img/' + DB.trending_ideas[key].img} />
                  </GridTile>
                ))}
              </GridList>
            </div>
          </MuiThemeProvider> 
        </Col>
      </Row>
    </Grid>
);

export default TrendingIdeas;
