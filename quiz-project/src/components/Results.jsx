import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

export default class Results extends React.Component {
    render() {
        return (
            <div className="card mb-5">
                <div className="card-body">
                    <img className="card-img-top mb-3" src={this.props.image} />
                    <h4 className="card-title">{this.props.description}</h4>
                    <button className="btn btn-primary"
                        onClick={() => {window.location.hash = "/home"}}>
                        View All Quizzes</button>
                </div>
            </div>
        )  
    }
}