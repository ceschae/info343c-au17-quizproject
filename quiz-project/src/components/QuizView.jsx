//Taking the quiz
import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import Question from "./Question";
import ResultsView from "./Results";

export default class QuizView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }

    handleSubmit() {
        let score = 0;
        document.querySelectorAll(".answer").forEach(answer => {
            score += parseInt(answer.value);
        });
        this.setState({
            score: score,
            done: true
        });
    }

    render () {
        let quizRef = this.props.location.state.quizRef;
        return (
            <div className="container">
                <h1>{quizRef.quizDetails.title}</h1>
                <h4 className="pb-3">Quiz created by: {quizRef.author.displayName}</h4>
                <hr />
                <h5>{quizRef.quizDetails.description}</h5>
                <div className="row m-2">
                    <div className="col">
                        <img src={quizRef.quizDetails.results.result1.imageUrl} className="img-thumbnail" />
                    </div>
                    <div className="col">
                        <img src={quizRef.quizDetails.results.result2.imageUrl} className="img-thumbnail" />
                    </div>
                    <div className="col">
                        <img src={quizRef.quizDetails.results.result3.imageUrl} className="img-thumbnail" />
                    </div>
                </div>
                
                <Question number="1" qRef={quizRef.quizDetails.question1}/>
                <Question number="2" qRef={quizRef.quizDetails.question2}/>
                <Question number="3" qRef={quizRef.quizDetails.question3}/>
                <Question number="4" qRef={quizRef.quizDetails.question4}/>
                <Question number="5" qRef={quizRef.quizDetails.question5}/>
                <Question number="6" qRef={quizRef.quizDetails.question6}/>
                <Question number="7" qRef={quizRef.quizDetails.question7}/>

                <button type="button" className="btn btn-primary btn-lg btn-block mb-5"
                    onClick={() => this.handleSubmit()}>Submit!</button>

                {
                    this.state.done && <ResultsView />
                }
            </div>
        );
    }
}