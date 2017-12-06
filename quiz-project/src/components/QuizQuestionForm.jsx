import React from 'react';

import constants from "./constants";

export default class QuizQuestionForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let question = "question" + this.props.id;
        return (
            <form>
                <div className="card">
                    <div className="card-body" id={question}>
                        <h4 className="card-title">Question {this.props.id}:</h4>
                        <input className="form-control question" placeholder="What question should the user answer?" 
                            />
                        <div className="d-flex">
                            <input className="form-control answer1" placeholder="Answer Option 1" />
                            <input className="form-control points1" placeholder="Points" />
                        </div>
                        <div className="d-flex">
                            <input className="form-control answer2" placeholder="Answer Option 2" />
                            <input className="form-control points2" placeholder="Points" />
                        </div>
                        <div className="d-flex">
                            <input className="form-control answer3" placeholder="Answer Option 3" />
                            <input className="form-control points3" placeholder="Points" />
                        </div>
                        <div className="d-flex">
                            <input className="form-control answer4" placeholder="Answer Option 4" />
                            <input className="form-control points4" placeholder="Points" />
                        </div>
                    </div>
                </div>
            </form>       
        ) 
    }
}