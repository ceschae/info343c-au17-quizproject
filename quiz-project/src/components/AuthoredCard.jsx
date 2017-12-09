import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class AuthoredCard extends React.Component {
    render () {
        let quiz = this.props.quizSnapshot.val();
        return (
            <div className="container pb-3">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{quiz.quizDetails.title}</h4>
                    <p>{quiz.quizDetails.description}</p>
                        <button className="btn btn-outline-primary">
                        <Link to= {{
                            pathname:'/quiz/' + this.props.quizSnapshot.key,
                            state: {quizRef: quiz}}}> 
                            Click here to take your quiz!</Link></button>
                </div>
            </div>
            </div>
        );
    }
}