import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

import styles from "./Profile.css";

export default class AuthoredCard extends React.Component {
    handleDelete() {
        let key = this.props.quizSnapshot.key;
        let results = firebase.database().ref("results").once('value').then(function(snapshot) {
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
                        <button className="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal">Delete Quiz</button>
                </div>
            </div>
            <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Confirm Delete Quiz</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        You're about to delete your quiz. The data can not be restored if deleted. Are you sure you want to delete your quiz?   
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleDelete()}>Confirm Delete</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}