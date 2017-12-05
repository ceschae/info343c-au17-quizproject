import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

export default class ResultsView extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )  
    }
}