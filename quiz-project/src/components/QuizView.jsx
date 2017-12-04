//Taking the quiz
import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import Question from "./Question";
import Results from "./Results";

export default class QuizView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //author: 
        }
    }

    handleSubmit() {
        console.log("submitted");
        let score = 0;
        document.querySelectorAll(".answer").forEach(answer => {
            score += parseInt(answer.value);
        });
    }

    render () {
        //let quiz = this.props.quizSnapshot.val();
        //{quiz.quizDetails.title}
        //{quiz.author.displayName}
        //pass in the necessary values into the components to be able to display
        return (
            <div className="container">
                <h1>Quiz Title</h1>
                <h4 className="pb-3">Quiz created by: Author</h4>
                <Question number="1" />
                <Question number="2" />
                <Question number="3" />
                <Question number="4" />
                <Question number="5" />
                <Question number="6" />
                <Question number="7" />

                <button type="button" className="btn btn-primary btn-lg btn-block mb-5"
                    onClick={() => this.handleSubmit()}>Submit!</button>

            </div>
        );
    }
}