import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import forgot from './components/Forgot';
import Archive from './components/Archive'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/forgot" exact component={Forgot} />
            <Route path="/register" component={Register} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;