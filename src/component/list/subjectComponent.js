import React, { Component } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class SubjectComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TableRow
        key={this.props.key}
        hover
      >
        <TableCell>{this.props.title}</TableCell>
      </TableRow>
    )
  }
}

export default withRouter((SubjectComponent));