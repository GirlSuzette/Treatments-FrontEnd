import React, { Component } from 'react';
import ButtonAppBar from './components/ButtonAppBar'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        {/* < TemporaryDrawer /> */}

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
