//Question
import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class Question extends React.Component {
    render () {
        return (
            <div className="container pb-3">
            <div className="card">
                <img className="card-img-top" src="https://static1.squarespace.com/static/573318d13c44d8f12292ed1d/t/573c7f4759827e652bb427e2/1463582536901/Ice-Cream-Banner.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">Question {this.props.number}</h4>
                    
                    <div className="form-group">
                        <label htmlFor="answers">Label here if necessary </label>
                        <select className="form-control answer">
                            <option value="1">Answer Option 1</option>
                            <option value="2">Answer Option 2</option>
                            <option value="3">Answer Option 3</option>
                            <option value="4">Answer Option 4</option>
                        </select>
                  </div>
                </div>
            </div>
            </div>
        );
    }
}