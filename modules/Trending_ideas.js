import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import getMuiTheme       from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import {Col}   from 'react-bootstrap';

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
);

export default TrendingIdeas;

          // {tilesData.map((tile) => (