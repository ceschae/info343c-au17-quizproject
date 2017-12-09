import React from 'react';

import constants from "./constants";

import styles from "./ResultForm.css";

export default class ResultForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl = ""
        }
    }

    handleTest() {

    }

    render() {
        let result= "result" + this.props.id;
        return (
            <form>
                <div className="card mb-1">
                    <div className="card-body" id={result}>
                        <h4 className="card-title">Result {this.props.id}:</h4>
                        <input className="form-control result mb-1" placeholder="Result description"/>
                        <div className="input-group">
                            <input className="form-control image" placeholder="Image URL for this result" onInput={evt => this.setState({imgUrl: evt.target.value})} />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button" onClick={this.handleTest()}>Test Image</button>
                            </span>
                        </div>
                    </div>
                </div>
            </form>       
        ) 
    }
}