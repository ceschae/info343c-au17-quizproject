import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class ResultCard extends React.Component {
    render () {
        let quiz = this.props.quizSnapshot.val();
        console.log(quiz);
        return (
            <div className="container pb-3">
            <div className="card">
                <img className="card-img-top" src={quiz.result.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{quiz.quizTitle}</h4>
                    <div className="card-body">
                        <p>{quiz.result.description}</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}