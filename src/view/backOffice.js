import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import axios from '../utils/axios';
import subjectList from './subjectList';

const styles = (theme) => ({
  paper: {
    height: "100vh",
  },

  headerContainer: {
    display: "flex",
  },

  title: {
    flex: 4,
    textAlign: "center"
  },

  iconContainer: {
    flex: 1,
    marginTop: "25px"
  },
})

class BackOffice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subjectList: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/study/subjects/get/all")
      .then(response => {
        this.setState({
          subjectList: response.data,
        });
      })
  }

  turnToAddSubject() {
    this.props.history.push('/addSubject');
  }

  turnToEditSubject(subjectId) {
    this.props.history.push('/editSubject/' + subjectId);
  }

  deleteSubject(subjectId) {
    axios.delete('http://localhost:5000/study/subjects/delete/' + subjectId)
      .then(response => {
        console.log(response.data);
        alert("已刪除");
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.headerContainer}>
          <h1 className={classes.title}>Back Office</h1>
          <div className={classes.iconContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={() => { this.turnToAddSubject() }}
            >
              Add Subject
            </Button>
          </div>
        </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Function</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.subjectList.map((unit, index) => (
              <TableRow
                key={index}
                hover
              >
                <TableCell>{unit._id}</TableCell>
                <TableCell>{unit.title}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => { this.turnToEditSubject(unit._id) }}
                  >
                    <EditIcon />
                  </IconButton >
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => { this.deleteSubject(unit._id) }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div >
    )
  }
}

export default withStyles(styles, { withTheme: true })(BackOffice);