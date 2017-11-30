import React from 'react';

import QuizQuestion from "./QuizQuestion";

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizSnapshot: undefined,
            quizTitle: ""
        }
    }

    componentDidMount() {
        this.props.quizRef.on("value",
            snapshot => this.setState({quizSnapshot: snapshot}));
    }

    componentWillUnmount() {
        this.props.quizRef.off("value");
    }

    /* 
    -insert quiz title
    -insert a pic url, question, and 4 possible answers
      + any number of questions
    -add final results and criteria for results
    -save quiz
    */
    render() {
      return (
            <div id="quiz">
                <form id="title-form" className="form-group">
                    <label>Quiz Title</label>
                    <input className="form-control" placeholder="Title" onInput={evt => this.setState({quizTitle: evt.target.value})}/>
                </form>

                <QuizQuestion />

                <div id="add-new-question">
                </div>

                <div id="add-result-form">
                </div>

                <div id="save-quiz-button">
                </div>
            </div>
        ) 
    }
}