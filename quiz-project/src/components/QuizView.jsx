//Taking the quiz
import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import Question from "./Question";

export default class QuizView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //author: 
            //
        }
    }
    render () {
        //let quiz = this.props.quizSnapshot.val();
        //{quiz.quizDetails.title}
        //{quiz.author.displayName}
        //pass in the necessary values into the components to be able to display
        return (
            <div className="container">
                <h1>Quiz Title</h1>
                <h4>Quiz created by: Author</h4>
                <hr />
                <Question number="1" />
                <Question number="2" />
                <Question number="3" />
                <Question number="4" />
                <Question number="5" />
                <Question number="6" />
                <Question number="7" />
            </div>
        );
    }
}