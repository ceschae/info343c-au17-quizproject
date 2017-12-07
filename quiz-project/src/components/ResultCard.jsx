import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class ResultCard extends React.Component {
    render () {
        let quiz = this.props.quizSnapshot.val();
        let style = {
            'objectFit': 'cover',
            height: '300px'
        }
        return (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3  pb-3">
            <div className="card">
                <img className="card-img-top" style={style} src={quiz.result.imageUrl} alt="Card image cap" />
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