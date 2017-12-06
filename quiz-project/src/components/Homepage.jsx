import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import SignOutView from './SignOut';
import ProfileView from './Profile';
import QuizCard from './QuizCard';

import firebase from 'firebase/app';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzesSnapshot: undefined
        }
    }
    componentWillMount() {
        firebase.database().ref("quizzes").on("value",
            snapShot => this.setState({quizzesSnapshot: snapShot}));
    }   
    componentWillUnmount() {
        firebase.database().ref("quizzes").off("value");
    }
    render() {
        let quizRef = firebase.database().ref("quizzes");   
        if(!this.state.quizzesSnapshot) {
            return <div>Loading... Please be patient</div>;
        }
        let quizzes= [];
        this.state.quizzesSnapshot.forEach(quizSnapshot => {
            quizzes.push(<QuizCard key={quizSnapshot.key} 
                quizSnapshot = {quizSnapshot} />);
        });
        //chanName is gonna be either: /quiz, /quiz/create, profile, ...     
        return (
            <div className="container">
                <ul className="nav nav-tabs nav-fill mb-3">
                    <li className="nav-item">
                        <Link to = "/home" className="nav-link" > 
                            Quizzes</Link>
                    </li>
                    <li className="nav-item">
<<<<<<< HEAD
                        <Link to="/create" className="nav-link" >
                        Create</Link>
=======
                        <Link to="/create" className="nav-link" onClick={()=>window.location.reload()}> Create</Link>
>>>>>>> 7dafb8496794f09e7d5e9cee6c530bb59a035d0b
                    </li>
                    <li className="nav-item">
                        <Link to = "/profile" className="nav-link" > Profile</Link>
                    </li>
                    <li className="nav-item">
                        <SignOutView />
                    </li>
                </ul>

            {
                (() => {
                    switch(window.location.hash){
                        case "#/create": return <div className="container">Create Quiz</div>;
                        case "#/profile": return <div className="container">
                                                     <ProfileView />
                                                </div>;
                        default: return <div>
                                            {quizzes}
                                        </div>;
                    }

                })()

            }

            </div>

        )
    }
}
