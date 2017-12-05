import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

export default class ResultsView extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Results Page</h1>
                <h2>{this.props.result}</h2>
            </div>
      ) 
    }
}