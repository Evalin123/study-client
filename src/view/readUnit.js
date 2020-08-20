import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import axios from '../utils/axios';
import jwt_decode from 'jwt-decode';

const styles = (theme) => ({
  root: {
    height: "100vh",
    left: "(100%-240px)/2"
  },
  paper: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  submit: {
    width: "48%",
    height: "40px",
    marginTop: "24px",
  }
})

class ReadUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: {
        _id: "",
        subjectId: "",
        title: "",
        subtitle: "",
        content: "",
      },
      subject: {
        _id: "",
        title: "",
        description: "",
      },
    }
  }

  componentDidMount() {
    const unitId = this.props.match.params.unitId;
    axios.get('http://localhost:5000/study/units/id/' + unitId)
      .then(response => {
        console.log(response.data);
        this.setState({ unit: response.data.data.unit, subject: response.data.data.subject });
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" component={Card} className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Unit
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid container item xs={12} xm={12}>
                <TextField
                  value={this.state.subject.title}
                  name="subject"
                  id="subject"
                  label="Subject"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  value={this.state.unit.title}
                  name="title"
                  id="title"
                  label="Title"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  value={this.state.unit.subtitle}
                  name="subtitle"
                  id="subtitle"
                  label="Subtitle"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  value={this.state.unit.content}
                  name="content"
                  id="content"
                  label="Content"
                  variant="outlined"
                  multiline
                  rows={10}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true
                  }}
                  fullWidth
                >
                </TextField>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ReadUnit);