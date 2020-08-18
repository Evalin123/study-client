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
import CreateIcon from '@material-ui/icons/Create';

import axios from '../utils/axios';
import FormComponent from '../component/form/form';

const styles = (theme) => ({
  root: {
    height: "80vh",
    marginTop: "45px"
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
    marginTop: "24px"
  }
})

class EditSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        userId: "",
        _id: "",
        title: "",
        description: "",
      },
    }
  }

  componentDidMount() {
    const subjectId = this.props.match.params.subjectId;
    axios.get('http://localhost:5000/study/subjects/get/' + subjectId)
      .then(response => {
        this.setState({ subject: response.data })
        console.log(response);
      })
  }

  editSubject(subject) {
    axios.post('http://localhost:5000/study/subjects/edit/' + subject._id, subject)
      .then(response => {
        console.log(response.data);
        this.setState({ subject: response.data.data });
        alert("已編輯");
        this.props.history.push('/subject');
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xs" component={Card} className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Subject
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={(event) => {
                    let subject = this.state.subject;
                    subject.title = event.target.value;
                    this.setState({ subject: subject });
                  }}
                  value={this.state.subject.title}
                  name="title"
                  id="title"
                  label="Title"
                  variant="standard"
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={(event) => {
                    let subject = this.state.subject;
                    subject.description = event.target.value;
                    this.setState({ subject: subject });
                  }}
                  name="description"
                  id="description"
                  label="Description"
                  variant="outlined"
                  value={this.state.subject.description}
                  multiline
                  rows={4}
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              onClick={() => { this.editSubject(this.state.subject) }}
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

export default withStyles(styles, { withTheme: true })(EditSubject);