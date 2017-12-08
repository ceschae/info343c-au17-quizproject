import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class AuthoredCard extends React.Component {
    handleDelete() {
        let key = this.props.quizSnapshot.key;
        let results = firebase.database().ref("results").once('value').then(function(snapshot) {
            /*snapshot.val().forEach(element => {
                console.log(element);
            });*/
            let results = snapshot.val();
            for (let propName in results) {
                if (results[propName].quizId === key) {
                    firebase.database().ref("results/" + propName).remove();
                }
            }
        });
        firebase.database().ref("quizzes/" + this.props.quizSnapshot.key).remove();
    }

    render () {
        let quiz = this.props.quizSnapshot.val();
        console.log(quiz);
        console.log(this.props.quizSnapshot);
        let stats = "" + quiz.count + " ";
        if (quiz.count === 1) {
            stats += "person has";
        } else {
            stats += "people have";
        }
        stats += " taken your quiz!";
        return (
            <div className="container pb-3">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{quiz.quizDetails.title}</h4>
                    <p>{stats}</p>
                        <button className="btn btn-outline-primary">
                        <Link to= {{
                            pathname:'/quiz/' + this.props.quizSnapshot.key,
                            state: {quizRef: quiz}}}> 
                            Click here to take your quiz!</Link></button>
                        <button className="btn btn-outline-danger"
                        onClick={() => this.handleDelete()}>Delete Quiz</button>
                </div>
            </div>
            </div>
        );
    }
}