import React, { Component } from 'react';
import ButtonAppBar from './components/ButtonAppBar'
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import Treatments from './components/Treatments';
import Records from './components/Records';
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/treatments' component={Treatments} />
          <Route exact path='/records' component={Records} />
        </Switch>
      </div>
    );
  }
}

export default App;
