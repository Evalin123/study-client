import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import axios from 'axios';

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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        _id: "",
        name: "",
        email: "",
        password: "",
        identity: "",
      }
    }
  }

  creatAccount(user) {
    axios.post('http://localhost:5000/study/users/register', user)
      .then(response => {
        console.log(response);
        alert("註冊成功");
        this.props.history.push('/login');
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" component={Card} className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={(event) => {
                    let user = this.state.user;
                    user.name = event.target.value;
                    this.setState({ user: user });
                  }}
                  name="name"
                  id="name"
                  autoComplete="name"
                  label="Name"
                  type="text"
                  variant="outlined"
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={(event) => {
                    let user = this.state.user;
                    user.email = event.target.value;
                    this.setState({ user: user });
                  }}
                  name="email"
                  id="email"
                  autoComplete="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={(event) => {
                    let user = this.state.user;
                    user.password = event.target.value;
                    this.setState({ user: user });
                  }}
                  name="password"
                  id="password"
                  autoComplete="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="simple-select-outlined-label">Identity</InputLabel>
                  <Select
                    onChange={(event) => {
                      let user = this.state.user;
                      user.identity = event.target.value;
                      this.setState({ user: user });
                    }}
                    value={this.state.user.identity}
                    labelId="simple-select-outlined-label"
                    id="simple-select-outlined"
                    label="Identity"
                  >
                    <MenuItem value={0}>Teacher</MenuItem>
                    <MenuItem value={1}>Student</MenuItem>
                  </Select>
                  <FormHelperText>Please select your identity</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              onClick={() => { this.creatAccount(this.state.user) }}
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

export default withStyles(styles, { withTheme: true })(Register);