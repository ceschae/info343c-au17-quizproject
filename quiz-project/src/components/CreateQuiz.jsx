import React from 'react';

import QuizQuestionForm from "./QuizQuestionForm";

import firebase from 'firebase/app';

export default class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizSnapshot: undefined,
            quizTitle: "",
            description: ""
        }
    }

    componentWillMount() {
        firebase.database().ref("quizzes").on("value",
            snapShot => this.setState({quizSnapshot: snapShot}));
    }  

    componentWillUnmount() {
        firebase.database().ref("quizzes").off("value");
    }

    /* 
    -insert quiz title
    -insert a pic url, question, and 4 possible answers
      + any number of questions
    -add final results and criteria for results
    -save quiz
    */
    render() {
        /*
        let quizRef = firebase.database().ref("quizzes");   
        if(!this.state.quizSnapshot) {
            return <div>Loading... Please be patient</div>;
        }
        let qList = [];
        this.state.quizSnapshot.forEach(snapshot => {
            qList.push(<QuizQuestionForm key={snapshot.key} quizSnapshot={snapshot} />)
        });*/
        return (
            <div id="quiz" className="w-100">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Quiz Title:</h4>
                        <input className="form-control" placeholder="What should the quiz be called?" onInput={evt => this.setState({quizTitle: evt.target.value})}/>
                    </div>
                </div>
                <div className="w-100">
                    <QuizQuestionForm id={1}/>
                    <QuizQuestionForm id={2}/>
                    <QuizQuestionForm id={3}/>
                    <QuizQuestionForm id={4}/>
                    <QuizQuestionForm id={5}/>
                    <QuizQuestionForm id={6}/>
                    <QuizQuestionForm id={7}/>
                </div>

                <button type="button" className="btn btn-primary btn-lg btn-block mb-5"
                    onClick={() => this.handleSubmit()}>Submit!</button>
                
            </div>
        ) 
        /*<div id="add-new-question">
                </div>

                <div id="add-result-form">
                </div>

                <div id="save-quiz-button">
                </div>
                */
    }
}