import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Home from './view/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact component= {Home}></Route>
      </div>
    );
  }
}

export default App;
