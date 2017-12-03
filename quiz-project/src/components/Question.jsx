//Question
import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class Question extends React.Component {
    render () {
        return (
            <div className="container">
            <div className="card">
                <img className="card-img-top" src="https://hdwallsource.com/img/2016/5/ice-cream-wallpaper-background-49427-51096-hd-wallpapers.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">Question {this.props.number}</h4>
                    
                    <div className="form-group">
                        <label for="answers">Label here if necessary </label>
                        <select className="form-control" id="answers">
                            <option>Answer Option 1</option>
                            <option>Answer Option 2</option>
                            <option>Answer Option 3</option>
                            <option>Answer Option 4</option>
                        </select>
                  </div>
                </div>
            </div>
            </div>
        );
    }
}