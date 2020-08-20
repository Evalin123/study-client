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
import UnitComponent from '../component/list/unitComponent';

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

class QuizList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: { title: "", description: "", _id: "" },
      quizList: [],
    }
  }

  componentDidMount() {
    const subjectId = this.props.match.params.subjectId;
    axios.get('http://localhost:5000/study/quizzes/subject/' + subjectId)
      .then(response => {
        this.setState({ 
          quizList: response.data.data.quizzes,
          subject: response.data.data.subject,
        });
      })
  };

  // chooseSubject(subjectId) {
  //   this.props.history.push('/subject/' + subjectId);
  // };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <h1 className={classes.title}>{this.state.subject.title}</h1>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Subtitle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.quizList.map((quiz, index) => (
              <UnitComponent
              key={index}
              unitId={quiz._id}
              subjectId={quiz.subjectId}
              title={quiz.title}
              subtitle={quiz.subtitle}
              >
              </UnitComponent>
            ))}
          </TableBody>
        </Table>
      </div >
    )
  }
}

export default withStyles(styles, { withTheme: true })(QuizList);