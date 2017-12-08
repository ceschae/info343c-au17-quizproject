import React, { Component } from 'react';
import { FacebookButton, FacebookCount } from "react-social";

import logo from './logo.svg';
import constants from "./components/constants";
import QuizView from "./components/QuizView";
import SignInView from "./components/SignIn";
import SignUpView from "./components/SignUp";
import SignOutView from "./components/SignOut";
import CreateQuiz from "./components/CreateQuiz";
import Homepage from "./components/Homepage";
import ProfileView from './components/Profile';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curUser: null,
      quizzesSnapshot: undefined
    }
  }
  componentWillMount() {
    this.authUnsub = firebase.auth().onAuthStateChanged(user => {
        this.setState({curUser: user});
    });
    firebase.database().ref("quizzes").on("value",
    snapShot => this.setState({quizzesSnapshot: snapShot}));
}

componentWillUnmount() {
this.authUnsub();
}
  render() {
    if(!this.state.quizzesSnapshot) {
      return <div>Loading... Please be patient</div>;
    }
    let quizzes = [];
    this.state.quizzesSnapshot.forEach(quizSnapshot => {
        quizzes.push(<Route path={"/quiz/" + quizSnapshot.key} component={QuizView} />)
    });
    return (
      <Router>
      <div className="App">
        {
         (firebase.auth().currentUser) ? 
         <nav className="navbar navbar-expand-md navbar-light bg-faded">
         <a className="navbar-brand" href="#">
           <img src="https://png.icons8.com/food-and-wine-filled/ios7/40/000000" width="30" height="30" className="d-inline-block align-top pr-2" alt="pic"></img>
             Boozefeed
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li>
               <Link to={constants.routes.home} className="nav-link">Quizzes</Link>
             </li>
             <li>
               <Link to={constants.routes.create} className="nav-link">Create</Link>
             </li>
             <li>
               <Link to={constants.routes.profile} className="nav-link">Profile</Link>
             </li>
             <li>
               <Link to={constants.routes.about} className="nav-link">About</Link>
             </li>
           </ul>
           <ul className="navbar-nav ml-auto">
             <li>
               <Link to={constants.routes.signin} className="nav-link" onClick={() => firebase.auth().signOut()}>Sign Out</Link>
             </li>
           </ul>
         </div>
         </nav>
         :
         undefined
       }
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
                <Route path={constants.routes.about} component={Homepage} />
                <Route component={SignInView} />
                {quizzes}
              </Switch>
           
          </div>
        </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
