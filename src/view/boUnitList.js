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
import DescriptionIcon from '@material-ui/icons/Description';

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
  
  table: {
    width: `calc(100% - 480px)`,
    marginLeft: "240px"
  },
})

class BOUnitList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unitList: [],
      subject: { title: "", description: "", _id: "" },
    }
  }

  componentDidMount() {
    const subjectId = this.props.match.params.subjectId;
    axios.get("http://localhost:5000/study/units/subject/" + subjectId)
      .then(response => {
        this.setState({
          unitList: response.data.data.units,
          subject: response.data.data.subject
        });
      })
  }

  turnToAddUnit(subjectId) {
    this.props.history.push('/addUnit/' + subjectId);
  }

  turnToEditUnit(unitId) {
    this.props.history.push('/editUnit/' + unitId);
  }

  deleteUnit(unitId) {
    axios.delete('http://localhost:5000/study/subjects/delete/' + unitId)
      .then(response => {
        console.log(response.data);
        alert("已刪除");
      })
  }

  readUnit(subjectId, unitId) {
    this.props.history.push('/subject/' + subjectId + '/' + unitId);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.headerContainer}>
    <h1 className={classes.title}>{this.state.subject.title}</h1>
          <div className={classes.iconContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={() => { this.turnToAddUnit(this.state.subject._id) }}
            >
              Add Unit
            </Button>
          </div>
        </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Subtitle</TableCell>
              <TableCell>Function</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.unitList.map((unit, index) => (
              <TableRow
                key={index}
                hover
              >
                <TableCell>{unit._id}</TableCell>
                <TableCell>{unit.title}</TableCell>
                <TableCell>{unit.subtitle}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => { this.readUnit(unit.subjectId, unit._id) }}
                  >
                    <DescriptionIcon />
                  </IconButton >
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => { this.turnToEditUnit(unit._id) }}
                  >
                    <EditIcon />
                  </IconButton >
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => { this.deleteUnit(unit._id) }}
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

export default withStyles(styles, { withTheme: true })(BOUnitList);