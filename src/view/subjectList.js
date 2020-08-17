import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import { ListSubheader } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import background from '../resource/test.png';

import axios from '../utils/axios';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '650px',
    height: '500px',
  },
  listHeader: {
    fontSize: '20px'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

class SubjectList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subjectList: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/study/subjects/get/all')
      .then(response => {
        this.setState({ subjectList: response.data });
      })
  };

  chooseSubject(subjectId) {
    this.props.history.push('/subject/' + subjectId);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className={classes.listHeader}>Subject</ListSubheader>
          </GridListTile>
          {this.state.subjectList.map((subject, index) => (
            <GridListTile key={index}>
              <img src={background} alt={subject.title} />
              <GridListTileBar
                title={subject.title}
                subtitle={<span>{subject.description}</span>}
                actionIcon={
                  <IconButton 
                    className={classes.icon}
                    onClick={() => {this.chooseSubject(subject._id)}}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SubjectList);