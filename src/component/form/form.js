import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const FormComponent = (props) => {

  return (
    <Grid container item xs={12} xm={12}>
      <TextField
        onChange={(event) => { props.onChange(event) }}
        name={props.name}
        id={props.name}
        autoComplete={props.name}
        label={props.label}
        type={props.type}
        variant={props.variant}
        required
        fullWidth
      >
      </TextField>
    </Grid>
  )
}

export default FormComponent;