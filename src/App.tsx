import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;