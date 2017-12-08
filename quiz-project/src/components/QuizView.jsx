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
            done: false,
            score: 7,
            description: "",
            imageUrl: "",
            quizRef: ""
        }
    }

    // The algorithm for determining the result
    handleSubmit() {
        let countResults = [0, 0, 0];
        document.querySelectorAll(".answer").forEach(answer => {
            let value = answer.value;
            if(value == 1) {
                countResults[0]++;
            } else if (value == 2) {
                countResults[1]++;
            } else {
                countResults[2]++;
            }
        });

        let resultIndex = 0;
        let max = 0;
        for(let i = 0; i < countResults.length; i++) {
            if(countResults[i] > max) {
                resultIndex = i;
            }
        }

        let resultRef = this.props.location.state.quizRef.quizDetails.results;
        let result = "";
        if (resultIndex === 0) { //result 1
            result = resultRef.result1;
        } else if (resultIndex === 2) { //result 2
            result = resultRef.result2;
        } else { //result 3
            result = resultRef.result3;
        }

        //update quiz count
        let newCount = this.props.location.state.quizRef.count + 1;
        this.props.location.state.quizSnapshot.ref.update({count: newCount});

        this.setState({
            resultIndex: resultIndex,
            done: true,
            description: result.description,
            imageUrl: result.imageUrl
        });  

        this.submitResult(result.description, result.imageUrl);
    }

    submitResult(description, image) {
        let resultsRef = firebase.database().ref("results");
        resultsRef.push({
            quizTitle: this.props.location.state.quizRef.quizDetails.title,
            result: {
                description: description,
                imageUrl: image
            },
            uid: firebase.auth().currentUser.uid
        });
    }

    render () {
        //referencing the database from the path's key
        //need this to avoid the error of losing the quizref when refreshing the page
        let quizRef = "";
        firebase.database().ref("quizzes/" + this.props.match.params.quizKey)
        .once("value")
        .then(snapshot => {
            quizRef = snapshot.val();
            console.log(quizRef);
        });

        console.log(quizRef);
        //it won't save agh

        let style = {
            'objectFit': 'cover',
            height: '250px', 
            width: '300px'
        }
        return (
            <div className="container">
        
                <h1>{quizRef.quizDetails.title}</h1>
                <h4 className="pb-3">Quiz created by: {quizRef.author.displayName}</h4>
                <hr />
                <h5>{quizRef.quizDetails.description}</h5>
                <div className="row m-2" id="cuntar">
                    <div className="crop col-xs-12 col-sm-4 col-md-4 ">
                        <img src={quizRef.quizDetails.results.result1.imageUrl} style={style} className="img-thumbnail" />
                    </div>
                    <div className="crop col-xs-12 col-sm-4 col-md-4 ">
                        <img src={quizRef.quizDetails.results.result2.imageUrl} style={style} className="img-thumbnail" />
                    </div>
                    <div className="crop col-xs-12 col-sm-4 col-md-4 ">
                        <img src={quizRef.quizDetails.results.result3.imageUrl} style={style} className="img-thumbnail" />
                    </div>
                </div>
                
                <Question number="1" qRef={quizRef.quizDetails.question1}/>
                <Question number="2" qRef={quizRef.quizDetails.question2}/>
                <Question number="3" qRef={quizRef.quizDetails.question3}/>
                <Question number="4" qRef={quizRef.quizDetails.question4}/>
                <Question number="5" qRef={quizRef.quizDetails.question5}/>

                {
                    this.state.done ? 
                    <Results description={this.state.description} 
                        image={this.state.imageUrl} />
                    :
                    <button type="button" className="btn btn-primary btn-lg btn-block mb-5"
                    onClick={() => this.handleSubmit()}>Submit!</button>
                }
            </div>
        );
    }
}