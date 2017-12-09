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
                <div className="card mb-2">
                    <div className="card-body" id={question}>
                        <h5 className="card-title">Question {this.props.id}:</h5>
                        <input className="form-control question mb-1" placeholder="What question should the user answer?" 
                            />
                        <div className="row mb-1">
                            <div className="col-2 pr-1">
                                <select className="form-control point1 mr-1">
                                    <option value="1">Result 1</option>
                                    <option value="2">Result 2</option>
                                    <option value="3">Result 3</option>
                                </select>
                            </div>
                            <div className="col pl-0">
                                <input className="form-control answer1" placeholder="Answer Option 1" />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <div className="col-2 pr-1">
                                <select className="form-control point2 mr-1" defaultValue="2">
                                    <option value="1">Result 1</option>
                                    <option value="2">Result 2</option>
                                    <option value="3">Result 3</option>
                                </select>
                            </div>
                            <div className="col pl-0">
                                <input className="form-control answer2" placeholder="Answer Option 2" />     
                            </div>                
                        </div>
                        <div className="row mb-1">
                            <div className="col-2 pr-1">
                                <select className="form-control point3 mr-1" defaultValue="3">
                                    <option value="1">Result 1</option>
                                    <option value="2">Result 2</option>
                                    <option value="3">Result 3</option>
                                </select>
                            </div>
                            <div className="col pl-0">
                                <input className="form-control answer3" placeholder="Answer Option 3" />    
                            </div>             
                        </div>
                    </div>
                </div>
            </form>       
        ) 
    }
}