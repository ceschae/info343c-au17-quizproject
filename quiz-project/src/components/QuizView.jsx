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
        let score = 0;
        document.querySelectorAll(".answer").forEach(answer => {
            score += parseInt(answer.value);
        });
    }

    render () {
        let quizRef = this.props.location.state.quizRef;
        console.log("quiz details:", quizRef.quizDetails);

        //let questionDetails = quizRef.quizDetails.question1;
        //console.log("question1 question", questionDetails.question);
        //console.log("question answer", questionDetails.option1.answer);
        return (
            <div className="container">
                <h1>{quizRef.quizDetails.title}</h1>
                <h4 className="pb-3">Quiz created by: {quizRef.author.displayName}</h4>
                <h5>{quizRef.quizDetails.description}</h5>
                <Question number="1" questionDetails={quizRef.quizDetails.question1}/>
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