import React from 'react';

import QuizQuestionForm from "./QuizQuestionForm";

import firebase from 'firebase/app';

export default class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    handleSubmit() {
        console.log("submitted");
        let quizzesRef = firebase.database().ref("quizzes"); // PUSH INTO THIS
        /*
        quizzesRef.push({
            test: "this is a test"
        });
        */

        
        
        quizzesRef.push({
            author: {
                displayName: firebase.auth().currentUser.displayName,
                uid: firebase.auth().currentUser.uid
            },
            quizDetails: {
                description: this.state.description,
                title: this.state.quizTitle,
                question1: {
                    question: document.querySelector("#question1 .question").value,
                    option1: {
                        answer: document.querySelector("#question1 .answer1").value,
                        points: document.querySelector("#question1 .points1").value
                    },
                    option2: {
                        answer: document.querySelector("#question1 .answer2").value,
                        points: document.querySelector("#question1 .points2").value
                    },
                    option3: {
                        answer: document.querySelector("#question1 .answer3").value,
                        points: document.querySelector("#question1 .points3").value
                    },
                    option4: {
                        answer: document.querySelector("#question1 .answer4").value,
                        points: document.querySelector("#question1 .points4").value
                    }
                },
                question2: {
                    question: document.querySelector("#question2 .question").value,
                    option1: {
                        answer: document.querySelector("#question2 .answer1").value,
                        points: document.querySelector("#question2 .points1").value
                    },
                    option2: {
                        answer: document.querySelector("#question2 .answer2").value,
                        points: document.querySelector("#question2 .points2").value
                    },
                    option3: {
                        answer: document.querySelector("#question2 .answer3").value,
                        points: document.querySelector("#question2 .points3").value
                    },
                    option4: {
                        answer: document.querySelector("#question2 .answer4").value,
                        points: document.querySelector("#question2 .points4").value
                    }
                },
                question3: {
                    question: document.querySelector("#question3 .question").value,
                    option1: {
                        answer: document.querySelector("#question3 .answer1").value,
                        points: document.querySelector("#question3 .points1").value
                    },
                    option2: {
                        answer: document.querySelector("#question3 .answer2").value,
                        points: document.querySelector("#question3 .points2").value
                    },
                    option3: {
                        answer: document.querySelector("#question3 .answer3").value,
                        points: document.querySelector("#question3 .points3").value
                    },
                    option4: {
                        answer: document.querySelector("#question3 .answer4").value,
                        points: document.querySelector("#question3 .points4").value
                    }
                },
                question4: {
                    question: document.querySelector("#question4 .question").value,
                    option1: {
                        answer: document.querySelector("#question4 .answer1").value,
                        points: document.querySelector("#question4 .points1").value
                    },
                    option2: {
                        answer: document.querySelector("#question4 .answer2").value,
                        points: document.querySelector("#question4 .points2").value
                    },
                    option3: {
                        answer: document.querySelector("#question4 .answer3").value,
                        points: document.querySelector("#question4 .points3").value
                    },
                    option4: {
                        answer: document.querySelector("#question4 .answer4").value,
                        points: document.querySelector("#question4 .points4").value
                    }
                },
                question5: {
                    question: document.querySelector("#question5 .question").value,
                    option1: {
                        answer: document.querySelector("#question5 .answer1").value,
                        points: document.querySelector("#question5 .points1").value
                    },
                    option2: {
                        answer: document.querySelector("#question5 .answer2").value,
                        points: document.querySelector("#question5 .points2").value
                    },
                    option3: {
                        answer: document.querySelector("#question5 .answer3").value,
                        points: document.querySelector("#question5 .points3").value
                    },
                    option4: {
                        answer: document.querySelector("#question5 .answer4").value,
                        points: document.querySelector("#question5 .points4").value
                    }
                },
                question6: {
                    question: document.querySelector("#question6 .question").value,
                    option1: {
                        answer: document.querySelector("#question6 .answer1").value,
                        points: document.querySelector("#question6 .points1").value
                    },
                    option2: {
                        answer: document.querySelector("#question6 .answer2").value,
                        points: document.querySelector("#question6 .points2").value
                    },
                    option3: {
                        answer: document.querySelector("#question6 .answer3").value,
                        points: document.querySelector("#question6 .points3").value
                    },
                    option4: {
                        answer: document.querySelector("#question6 .answer4").value,
                        points: document.querySelector("#question6 .points4").value
                    }
                },
                question7: {
                    question: document.querySelector("#question7 .question").value,
                    option1: {
                        answer: document.querySelector("#question7 .answer1").value,
                        points: document.querySelector("#question7 .points1").value
                    },
                    option2: {
                        answer: document.querySelector("#question7 .answer2").value,
                        points: document.querySelector("#question7 .points2").value
                    },
                    option3: {
                        answer: document.querySelector("#question7 .answer3").value,
                        points: document.querySelector("#question7 .points3").value
                    },
                    option4: {
                        answer: document.querySelector("#question7 .answer4").value,
                        points: document.querySelector("#question7 .points4").value
                    }
                },
            },
            results: {
                result1: {
                    description: "",
                    imageUrl: ""
                },
                result2: {
                    description: "",
                    imageUrl: ""
                },
                results3: {
                    description: "",
                    imageUrl: ""
                }
            }
        });
        
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
                        <input className="form-control" placeholder="Enter quiz description" onInput={evt => this.setState({description: evt.target.value})}/>
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