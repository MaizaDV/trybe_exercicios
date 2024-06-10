import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/profile" component={ Profile } />
      </Switch>
    );
  }
}

export default App;
