import React from 'react';

import QuizQuestionForm from "./QuizQuestionForm";
import ResultForm from "./ResultForm";
import firebase from 'firebase/app';

export default class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizTitle: "",
            description: "",
            allDone: false,
            missingFields: false
        }
    }
    componentDidMount () {
        window.scrollTo(0, 0)
    }
    handleSubmit() {
        //state missingFields isn't updating fast enough so need this variable
        let canSubmit = true; //to determine if possible to submit. 

        //make sure all fields are filled in
        document.querySelectorAll("input").forEach(input => {
            if(input.value === "") {
                this.setState({missingFields: true});
                canSubmit = false;
            }
        });
        
        if(canSubmit) { 
        let quizzesRef = firebase.database().ref("quizzes"); // PUSH INTO THIS

        quizzesRef.push({
            author: {
                displayName: firebase.auth().currentUser.displayName,
                uid: firebase.auth().currentUser.uid
            },
            count: 0,
            quizDetails: {
                description: this.state.description,
                title: this.state.quizTitle,
                question1: {
                    question: document.querySelector("#question1 .question").value,
                    option1: {
                        answer: document.querySelector("#question1 .answer1").value,
                        points: document.querySelector("#question1 .point1").value
                    },
                    option2: {
                        answer: document.querySelector("#question1 .answer2").value,
                        points: document.querySelector("#question1 .point2").value
                    },
                    option3: {
                        answer: document.querySelector("#question1 .answer3").value,
                        points: document.querySelector("#question1 .point2").value
                    }
                },
                question2: {
                    question: document.querySelector("#question2 .question").value,
                    option1: {
                        answer: document.querySelector("#question2 .answer1").value,
                        points: document.querySelector("#question2 .point1").value
                    },
                    option2: {
                        answer: document.querySelector("#question2 .answer2").value,
                        points: document.querySelector("#question2 .point2").value
                    },
                    option3: {
                        answer: document.querySelector("#question2 .answer3").value,
                        points: document.querySelector("#question2 .point3").value
                    }
                },
                question3: {
                    question: document.querySelector("#question3 .question").value,
                    option1: {
                        answer: document.querySelector("#question3 .answer1").value,
                        points: document.querySelector("#question3 .point1").value
                    },
                    option2: {
                        answer: document.querySelector("#question3 .answer2").value,
                        points: document.querySelector("#question3 .point2").value
                    },
                    option3: {
                        answer: document.querySelector("#question3 .answer3").value,
                        points: document.querySelector("#question3 .point3").value
                    }
                },
                question4: {
                    question: document.querySelector("#question4 .question").value,
                    option1: {
                        answer: document.querySelector("#question4 .answer1").value,
                        points: document.querySelector("#question4 .point1").value
                    },
                    option2: {
                        answer: document.querySelector("#question4 .answer2").value,
                        points: document.querySelector("#question4 .point2").value
                    },
                    option3: {
                        answer: document.querySelector("#question4 .answer3").value,
                        points: document.querySelector("#question4 .point3").value
                    }
                },
                question5: {
                    question: document.querySelector("#question5 .question").value,
                    option1: {
                        answer: document.querySelector("#question5 .answer1").value,
                        points: document.querySelector("#question5 .point1").value
                    },
                    option2: {
                        answer: document.querySelector("#question5 .answer2").value,
                        points: document.querySelector("#question5 .point2").value
                    },
                    option3: {
                        answer: document.querySelector("#question5 .answer3").value,
                        points: document.querySelector("#question5 .point3").value
                    }
                },
                results: {
                    result1: {
                        description: document.querySelector("#result1 .result").value,
                        imageUrl: document.querySelector("#result1 .image").value
                    },
                    result2: {
                        description: document.querySelector("#result2 .result").value,
                        imageUrl: document.querySelector("#result2 .image").value
                    },
                    result3: {
                        description: document.querySelector("#result3 .result").value,
                        imageUrl: document.querySelector("#result3 .image").value
                    }
                }
            }
        });
        this.setState({ allDone: true });
        }
    }

    render() {
        return (
            <div id="quiz" className="w-100">
                <p className="text-secondary pt-2">
                    <strong className="text-danger">All fields are required to submit the quiz.</strong>
                    <br/>
                    There are a total of 5 questions with 3 possible results. Using the drop down menu next to each question to 
                    assign each question to the corresponding result. The algorithm has already been calculated to determine 
                    the results for the user. If you do not provide an image, or the URL is/becomes broken, a default image will 
                    be provided to you.
                </p>
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title pt-0">Quiz Title:</h4>
                        <input className="form-control mb-1" placeholder="What should the quiz be called?" onInput={evt => this.setState({quizTitle: evt.target.value})}/>
                        <input className="form-control" placeholder="Enter quiz description" onInput={evt => this.setState({description: evt.target.value})}/>
                    </div>
                </div>
                <div className="w-100 mb-4">
                    <ResultForm id={1}/>
                    <ResultForm id={2}/>
                    <ResultForm id={3}/>
                </div>
                <div className="w-100">
                    <QuizQuestionForm id={1}/>
                    <QuizQuestionForm id={2}/>
                    <QuizQuestionForm id={3}/>
                    <QuizQuestionForm id={4}/>
                    <QuizQuestionForm id={5}/>
                </div>
                {
                    this.state.missingFields && 
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error:</strong> All fields are required to submit the quiz.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                            onClick={() => {this.setState({missingFields: false})}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                }
                {
                    this.state.allDone ? 
                    <div>
                        <div className="alert alert-success my-3" role="alert">Success! Your quiz has been stored successfully.</div>
                        <button type ="submit" className="btn btn-success btn-lg btn-block mb-5 mt-3"
                        onClick={() => {window.location.hash = "/home"}}>
                        View All Quizzes</button>
                    </div> :
                    <button type="button" className="btn btn-secondary btn-lg btn-block mb-5 mt-3"
                    onClick={() => this.handleSubmit()}>Submit!</button>
                }
            </div>
        )
    }
}