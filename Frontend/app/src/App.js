import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from 'classnames';
// import './assets/scss/styles.scss';

import Chat from './pages/chat';
import Join from './pages/join';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';

const App = ()=>{

    return (
      <div>
        <Router>
          <Switch>
              <Route path="/join" component={Join} />
            <Route path="/chat/:name/:room" component={Chat} />
            <Route path="/profile/:username" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
