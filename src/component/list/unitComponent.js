import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
  submit: {
    margin: theme.spacing(0, 1),
  }
})

class UnitComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props;

    return (
      <TableRow
        key={this.props.key}
        hover
        onClick={() => { 
          this.props.history.push('/subject/' + this.props.subjectId + '/' + this.props.unitId) 
        }}
      >
        <TableCell>{this.props.title}</TableCell>
        <TableCell>{this.props.subtitle}</TableCell>
      </TableRow>
    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(UnitComponent));