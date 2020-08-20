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
import { TextareaAutosize } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import axios from '../utils/axios';
import FormComponent from '../component/form/form';

const styles = (theme) => ({
  root: {
    height: "100vh",
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
  submit: {
    height: "40px",
    marginTop: "24px"
  }
})

class AddUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: {
        subjectId: props.match.params.subjectId,
        title: "",
        subtitle: "",
        content: "",
      },
    }
  }

  onTitleChange(event) {
    let unit = this.state.unit;
    unit.title = event.target.value;
    this.setState({ unit: unit });
  }

  onSubtitleChange(event) {
    let unit = this.state.unit;
    unit.subtitle = event.target.value;
    this.setState({ unit: unit });
  }

  addUnit(unit) {
    axios.post('http://localhost:5000/study/units/create/' + unit.subjectId, unit)
      .then(response => {
        console.log(response);
        alert("新增成功");
        this.props.history.push('/backoffice/' + unit.subjectId);
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg" component={Card} className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Unit
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid container item xs={12} xm={12}>
                <TextField
                  name="subjectId"
                  id="subjectId"
                  label="Subject ID"
                  variant="standard"
                  value={this.state.unit.subjectId}
                  fullWidth
                >
                </TextField>
              </Grid>
              <FormComponent
                name={"title"}
                label={"Title"}
                type={"text"}
                variant={"standard"}
                onChange={(event) => { this.onTitleChange(event) }}
              >
              </FormComponent>
              <FormComponent
                name={"subtitle"}
                label={"Subtitle"}
                type={"text"}
                variant={"standard"}
                onChange={(event) => { this.onSubtitleChange(event) }}
              >
              </FormComponent>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={(event) => {
                    let unit = this.state.unit;
                    unit.content = event.target.value;
                    this.setState({ unit: unit });
                  }}
                  name="content"
                  id="content"
                  label="Content"
                  variant="outlined"
                  multiline
                  rows={10}
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              onClick={() => { this.addUnit(this.state.unit) }}
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </div>
      </Container >
    )
  }
}

export default withStyles(styles, { withTheme: true })(AddUnit);