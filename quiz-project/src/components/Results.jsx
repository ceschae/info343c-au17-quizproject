import React from 'react';

import { FacebookButton, FacebookCount } from "react-social";

import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

export default class Results extends React.Component {
    render() {
        let url = "https://github.com";
        let appId = '134114333946019';
        return (
            <div className="card mb-5">
                <div className="card-body">
                    <img className="card-img-top mb-3" src={this.props.image} />
                    <h4 className="card-title">{this.props.description}</h4>

                    <FacebookButton url={url} appId={appId} className="btn btn-primary">
                        Share this quiz to Facebook!
                    </FacebookButton>
                    <button className="btn btn-primary"
                        onClick={() => {window.location.hash = "/home"}}>
                        View All Quizzes</button>
                </div>
            </div>
        )  
    }
}