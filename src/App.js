import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import asyncComponent from './asyncComponent/asyncComponent';

const asyncDemo = asyncComponent(() => {
  return import('./demo/demo')
})

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li>
              <NavLink 
                exact
                to="/demo">Demo</NavLink>
              </li>
            </ul>
            <Switch>
              <Route path="/demo" component={asyncDemo} />
            </Switch>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
