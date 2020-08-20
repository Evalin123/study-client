import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core';
import SubjectComponent from '../component/list/subjectComponent';

import axios from '../utils/axios';

const styles = (theme) => ({
  paper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    textAlign: "center"
  },

  table: {
    width: "480px",
  },
})

class QuizSubjects extends Component {
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

  // chooseSubject(subjectId) {
  //   this.props.history.push('/subject/' + subjectId);
  // };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <h1 className={classes.title}>Quiz</h1>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.subjectList.map((subject, index) => (
              <SubjectComponent
                key={index}
                title={subject.title}
              >
              </SubjectComponent>
            ))}
          </TableBody>
        </Table>
      </div >
    )
  }
}

export default withStyles(styles, { withTheme: true })(QuizSubjects);