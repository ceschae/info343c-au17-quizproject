import React from 'react';

import constants from "./constants";

export default class QuizQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: "",
            a1Img: "",
            a2Text: "",
            a3Text: "",
            a4Text: "",
            r1Img: "",
            r2Img: "",
            r3Img: ""
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.questionRef.push({
            question: this.state.questionText,
            a1: this.state.a1Text,
            a2: this.state.a2Text,
            a3: this.state.a3Text,
            a4: this.state.a4Text
        });
        this.setState({
            questionText: "",
            a1Text: "",
            a2Text: "",
            a3Text: "",
            a4Text: ""
        });
    }

    /* 
    
    */
    render() {
        return (
            <form>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Question {this.props.id}:</h4>
                        <input className="form-control" placeholder="What question should the user answer?" />
                        <input className="form-control" placeholder="First answer" />
                        <input className="form-control" placeholder="Second answer" />
                        <input className="form-control" placeholder="Third answer" />
                        <input className="form-control" placeholder="Fourth answer" />
                    </div>
                </div>
            </form>       
        ) 
    }
}