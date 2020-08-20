import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Card,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import axios from '../utils/axios';
import FormComponent from '../component/form/form';

const styles = (theme) => ({
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
    marginTop: "24px",
    marginBottom: "24px",
  }
})

class AddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: {
        subjectId: props.match.params.subjectId,
        title: "",
        subtitle: "",
        question: "",
        answer: "",
      },
    }
  }

  onTitleChange(event) {
    let quiz = this.state.quiz;
    quiz.title = event.target.value;
    this.setState({ quiz: quiz });
  }

  onSubtitleChange(event) {
    let quiz = this.state.quiz;
    quiz.subtitle = event.target.value;
    this.setState({ quiz: quiz });
  }

  addQuiz(quiz) {
    axios.post('http://localhost:5000/study/quizzes/create/' + quiz.subjectId, quiz)
      .then(response => {
        console.log(response);
        alert("新增成功");
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg" component={Card}>
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
                  value={this.state.quiz.subjectId}
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
                    let quiz = this.state.quiz;
                    quiz.question = event.target.value;
                    this.setState({ quiz: quiz });
                  }}
                  name="question"
                  id="question"
                  label="Question"
                  variant="outlined"
                  multiline
                  rows={10}
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Select</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" 
                  // value={value} onChange={handleChange}
                  >
                    <FormControlLabel value="A" control={<Radio color="primary" />} label="A" />
                    <FormControlLabel value="B" control={<Radio color="primary" />} label="B" />
                    <FormControlLabel value="C" control={<Radio color="primary" />} label="C" />
                    <FormControlLabel value="D" control={<Radio color="primary" />} label="D" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              onClick={() => { this.addQuiz(this.state.quiz) }}
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

export default withStyles(styles, { withTheme: true })(AddQuiz);