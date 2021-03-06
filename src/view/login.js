import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Card,
  CssBaseline,
  Avatar,
  Typography,
  Button,
  Link
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import axios from '../utils/axios';
import jwt_decode from 'jwt-decode';

import FormComponent from '../component/form/form';

const styles = (theme) => ({
  root: {
    height: "80vh",
    marginTop: "45px",
  },
  paper: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
    marginTop: "15px"
  }
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      }
    }
  }

  onEmailChange(event) {
    let user = this.state.user;
    user.email = event.target.value;
    this.setState({ user: user });
  }

  onPasswordChange(event) {
    let user = this.state.user;
    user.password = event.target.value;
    this.setState({ user: user });
  }

  logIn(user) {
    axios.post("http://localhost:5000/study/users/login", user)
      .then(response => {
        localStorage.setItem("jwtToken", response.data.token);
        const decoded = jwt_decode(response.data.token);
        localStorage.setItem("user", JSON.stringify(decoded));
        let userString = localStorage.getItem("user");
        let user = JSON.parse(userString);
        alert("登入成功")
        this.props.history.push('/subject');
      })
      .catch(err => {
        alert("登入失敗");
      })
  }

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    return (
      <Container maxWidth="xs" component={Card} className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <FormComponent
                name={"email"}
                label={"Email"}
                type={"email"}
                variant={"outlined"}
                onChange={(event) => { this.onEmailChange(event) }}
              >
              </FormComponent>
              <FormComponent
                name={"password"}
                label={"Password"}
                type={"password"}
                variant={"outlined"}
                onChange={(event) => { this.onPasswordChange(event) }}
              >
              </FormComponent>
            </Grid>
            <Button
              className={classes.submit}
              onClick={() => { this.logIn(user) }}
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/register" variant="body2">
                  Create Account
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Login);