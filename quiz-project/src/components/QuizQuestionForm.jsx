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
            a1Img: "",
            a2Img: "",
            a3Img: "",
            a4Img: ""
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
                <div className="form-group">
                    <label>Question {this.props.id}:</label>
                    <input className="form-control" placeholder="What question should the user answer?" />
                </div>
                <div className="card w-50">
                    <img className="card-img-top" src={constants.imgs.default} alt="Question 1 Image" />
                    <div className="card-body">
                        <h4 className="card-title">Answer 1:</h4>
                        <input className="form-control" placeholder="First answer" />
                        <input className="form-control" placeholder="Answer image URL" />
                    </div>
                </div>
                <div className="card w-50">
                    <img className="card-img-top" src={constants.imgs.default} alt="Question 2 Image" />
                    <div className="card-body">
                        <h4 className="card-title">Answer 2:</h4>
                        <input className="form-control" placeholder="Second answer" />
                        <input className="form-control" placeholder="Answer image URL" />
                    </div>
                </div>
                <div className="card w-50">
                    <img className="card-img-top" src={constants.imgs.default} alt="Question 3 Image" />
                    <div className="card-body">
                        <h4 className="card-title">Answer 3:</h4>
                        <input className="form-control" placeholder="Third answer" />
                        <input className="form-control" placeholder="Answer image URL" />
                    </div>
                </div>
                <div className="card w-50">
                    <img className="card-img-top" src={constants.imgs.default} alt="Question 4 Image" />
                    <div className="card-body">
                        <h4 className="card-title">Answer 4:</h4>
                        <input className="form-control" placeholder="Fourth answer" />
                        <input className="form-control" placeholder="Answer image URL" />
                    </div>
                </div>
            </form>       
        ) 
    }
}