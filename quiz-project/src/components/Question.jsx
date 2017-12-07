//Question
import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class Question extends React.Component {
    render () {
        let qRef = this.props.qRef;
        return (
            <div className="container pb-3">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Question {this.props.number}</h4>
                    
                    <div className="form-group">
                        <label className="card-subtitle text-muted" htmlFor="answers">{qRef.question}</label>
                        <select className="form-control answer">
                            <option value={qRef.option1.points}>{qRef.option1.answer}</option>
                            <option value={qRef.option2.points}>{qRef.option2.answer}</option>
                            <option value={qRef.option3.points}>{qRef.option3.answer}</option>
                        </select>
                  </div>
                </div>
            </div>
            </div>
        );
    }
}
