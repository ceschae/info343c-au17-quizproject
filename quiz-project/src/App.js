import React, { Component } from 'react';
import logo from './logo.svg';

import constants from "./components/constants";
import QuizView from "./components/QuizView";
import SignInView from "./components/SignIn";
import SignUpView from "./components/SignUp";
import SignOutView from "./components/SignOut";
import Homepage from "./components/Homepage";
import ProfileView from './components/Profile';

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="jumbotron bg-dark">
          <h1 className="text-primary display-3">Final Project</h1>
        </header>
        <div className="container">
          <div className="row">
            <Router>
              <Switch>
                <Route exact path={constants.routes.signin} component={SignInView} />
                <Route path={constants.routes.signup} component={SignUpView} />
                <Route path={constants.routes.quiz} component={QuizView} />
                <Route path="/home" component={Homepage} />
                <Route path="/profile" component={Homepage} />
                <Route component={SignInView} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
