import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class QuizCard extends React.Component {
    render () {
        let quiz = this.props.quizSnapshot.val();
        let style = {
            'objectFit': 'cover',
            height: '300px'
        }
        return (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3 pb-3">
            <div className="card">
                <img className="card-img-top" style={style} src={quiz.quizDetails.results.result1.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{quiz.quizDetails.title}</h4>
                    <div className="card-body">
                        <p>{quiz.quizDetails.description}</p>
                        <button className="btn btn-outline-primary">
                        <Link to= {{
                            pathname:'/quiz/' + this.props.quizSnapshot.key,
                            state: {quizRef: quiz}}}> 
                            Click here</Link></button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}