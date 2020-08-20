import React, { Component } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class UnitComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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

export default withRouter((UnitComponent));