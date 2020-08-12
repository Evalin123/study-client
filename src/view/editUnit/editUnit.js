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

import axios from '../../utils/axios';

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

class EditUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: {
        _id: "",
        subject: "",
        title: "",
        subtitle: "",
        content: "",
      }
    }
  }

  componentDidMount() {
    const unitId = this.props.match.params.id;
    axios.get('http://localhost:5000/study/units/id/' + unitId)
    .then(response => {
      this.setState({unit: response.data});
    })
  }

  editUnit(unit) {
    axios.post('http://localhost:5000/study/units/edit/' + unit._id, unit)
    .then(response => {
      console.log(response.data);
      this.setState({unit: response.data});
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
            Add one unit
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid container item xs={12} xm={12}>
                <TextField
                  value={this.state.unit.subject}
                  name="subject"
                  id="subject"
                  label="Subject"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disabled
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={event => {
                    let unit = this.state.unit;
                    unit.title = event.target.value;
                    this.setState({ unit: unit });
                  }}
                  value={this.state.unit.title}
                  name="title"
                  id="title"
                  label="Title"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={event => {
                    let unit = this.state.unit;
                    unit.subtitle = event.target.value;
                    this.setState({ unit: unit });
                  }}
                  value={this.state.unit.subtitle}
                  name="subtitle"
                  id="subtitle"
                  label="Subtitle"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={(event) => {
                    let unit = this.state.unit;
                    unit.content = event.target.value;
                    this.setState({ unit: unit });
                  }}
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
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              onClick={() => { this.editUnit(this.state.unit) }}
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles, { withTheme: true })(EditUnit);