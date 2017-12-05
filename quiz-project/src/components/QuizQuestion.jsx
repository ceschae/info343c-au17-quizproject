import React from 'react';

export default class QuizQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: "",
            a1Text: "",
            a2Text: "",
            a3Text: "",
            a4Text: ""
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
                    <label>Question:</label>
                    <input className="form-control" placeholder="What question should the user answer?" />
                </div>
                <div class="form-group">
                    <label>Answer 1:</label>
                    <input className="form-control" placeholder="First answer" />
                </div>
            </form>       
        ) 
    }
}