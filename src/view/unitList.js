import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import axios from '../utils/axios';
import UnitComponent from '../component/list/unitComponent';

const styles = (theme) => ({
  paper: {
    height: "100vh",
    left: "240px"
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
  },

  button: {
    marginTop: "25px"
  },

  table: {
    height: "100vh",
    width: `calc(100% - 480px)`,
    marginLeft: "240px"
  },

  submit: {
    margin: theme.spacing(0, 1),
  }
})

class UnitList extends Component {
  constructor(props) {
    super(props)
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    this.state = {
      subject: { title: "", description: "", _id: "" },
      unitList: [],
      identity: user.identity,
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

  goToAddUnit() {
    const subjectId = this.state.subject._id;
    this.props.history.push('/addUnit/' + subjectId);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.headerContainer}>
          <h1 className={classes.title}>{this.state.subject.title}</h1>
          {this.state.identity == 0 ?
            <div className={classes.iconContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddIcon />}
                onClick={() => { this.goToAddUnit() }}
              >
                Add Unit
            </Button>
            </div> : null
          }
        </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>SubTitle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.unitList.map((unit, index) => (
              <UnitComponent
                key={index}
                unitId={unit._id}
                subjectId={unit.subjectId}
                title={unit.title}
                subtitle={unit.subtitle}
              >
              </UnitComponent>
            ))}
          </TableBody>
        </Table>
      </div >
    )
  }
}

export default withStyles(styles, { withTheme: true })(UnitList);