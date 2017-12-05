//Question
import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class Question extends React.Component {
    render () {
        console.log("question details", this.props.questionDetails);
        console.log("question", this.props.questionDetails.question);
        console.log("question option 1", this.props.questionDetails.option1.answer);
        return (
            <div className="container pb-3">
            <div className="card">
                <img className="card-img-top" src="https://static1.squarespace.com/static/573318d13c44d8f12292ed1d/t/573c7f4759827e652bb427e2/1463582536901/Ice-Cream-Banner.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">Question {this.props.number}</h4>
                    
                    <div className="form-group">
                        <label htmlFor="answers">{this.props.questionDetails.question}</label>
                        <select className="form-control answer">
                            <option value="1">{this.props.questionDetails.option1.answer}</option>
                            <option value="2">{this.props.questionDetails.option2.answer}</option>
                            <option value="3">{this.props.questionDetails.option3.answer}</option>
                            <option value="4">{this.props.questionDetails.option4.answer}</option>
                        </select>
                  </div>
                </div>
            </div>
            </div>
        );
    }
}