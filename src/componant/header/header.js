import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import login from '../../view/login';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

const Header = (props) => {
  const [post, setPost] = useState({});

  const logIn = () => {
    
  }

  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Course
          </Typography>
          <Button 
            color="inherit"
            onClick={() => {}}
          >
          Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default withStyles(styles, { withTheme: true })(Header);