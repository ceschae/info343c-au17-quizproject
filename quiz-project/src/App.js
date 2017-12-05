import React, { Component } from 'react';
import logo from './logo.svg';

import SignInView from "./components/SignIn";
import SignUpView from "./components/SignUp";
import SignOutView from "./components/SignOut";
import Quiz from "./components/Quiz";

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    let quizRef = firebase.database().ref("quizzes");
    return (
      <div className="App">
      <header className="jumbotron bg-dark">
        <h1 className="text-primary display-3">Final Project</h1>
      </header>
      <div className="container">
        <SignOutView />
        <div className="row">
          <Router>
            <Switch>
              <Route exact path="/" component={SignInView} />
              <Route path="/signup" component={SignUpView} />
              <Route component={SignInView} />
            </Switch>
          </Router>
        </div>
        <Quiz quizRef={quizRef} />
      </div>
    </div>
    );
  }
}

export default App;
