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
        return (
            <div className="container">

            {
                (() => {
                    switch(window.location.hash){
                        case "#/create": return <div className="container">Create Quiz</div>;
                        case "#/profile": return <div className="container">
                                                     <ProfileView />
                                                </div>;
                        default: return <div className="row">
                                            {quizzes}
                                        </div>;
                    }

                })()

            }

            </div>

        )
    }
}
