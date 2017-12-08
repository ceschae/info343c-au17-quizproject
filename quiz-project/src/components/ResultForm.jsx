import React from 'react';

import constants from "./constants";

export default class ResultForm extends React.Component {
    render() {
        let result= "result" + this.props.id;
        return (
            <form>
                <div className="card mb-1">
                    <div className="card-body" id={result}>
                        <h4 className="card-title">Result {this.props.id}:</h4>
                        <input className="form-control result mb-1" placeholder="Result description"/>
                        <input className="form-control image" placeholder="Image URL for this result" />
                    </div>
                </div>
            </form>       
        ) 
    }
}