import React, { Component } from 'react';
import logo from './logo.svg';
import constants from "./components/constants";
import QuizView from "./components/QuizView";
import SignInView from "./components/SignIn";
import SignUpView from "./components/SignUp";
import SignOutView from "./components/SignOut";
import CreateQuiz from "./components/CreateQuiz";
import Homepage from "./components/Homepage";
import ProfileView from './components/Profile';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
  func() {
    return false;
  }
  render() {
    return (
      <Router>
      <div className="App">
       
      <nav className="navbar navbar-expand-md navbar-light bg-faded">
        <a className="navbar-brand" href="#">
          <img src="https://png.icons8.com/food-and-wine-filled/ios7/40/000000" width="30" height="30" className="d-inline-block align-top pr-2" alt="pic"></img>
            Boozefeed
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <Link to={constants.routes.home} className="nav-link">Quizzes</Link>
            <Link to={constants.routes.create} className="nav-link">Create</Link>
            <Link to={constants.routes.profile} className="nav-link">Profile</Link>
            <Link to={constants.routes.about} className="nav-link">About</Link>

          </div>
        </div>
        </nav>
          <header className="jumbotron">
          <h1 className="text-primary text-dark display-3">Boozefeed Quizzes</h1>
          </header>
        <div className="container">
          <div className="row">
           
              <Switch>
                <Route exact path={constants.routes.signin} component={SignInView} />
                <Route path={constants.routes.signup} component={SignUpView} />
                <Route path={constants.routes.quiz} component={QuizView} />
                <Route path={constants.routes.home} component={Homepage} />
                <Route path={constants.routes.profile} component={Homepage} />
                <Route path={constants.routes.create} component={CreateQuiz} />
                {/* <Route path={constants.routes.about} component={CreateQuiz} /> */}
                <Route component={SignInView} />
              </Switch>
           
          </div>
        </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
