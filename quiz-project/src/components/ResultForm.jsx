import React from 'react';

import constants from "./constants";

import styles from "./ResultForm.css";

export default class ResultForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "",
            test: false
        }
    }

    handleTest(evt) {
        evt.preventDefault();
        this.setState({imgUrl: evt.target.value});
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({test:true});
    }
    render() {
        let result= "result" + this.props.id;
        let style = {
            'objectFit': 'cover',
            height: '300px'
        }
        return (
            <form>
                <div className="card mb-1">
                    <div className="card-body" id={result}>
                        <h4 className="card-title">Result {this.props.id}:</h4>
                        {
                            this.state.test ? 
                            <img style={style} src={this.state.imgUrl} alt="Image link is not working properly" className="text-danger mb-2"></img>
                            :
                            undefined
                        }
                        <input className="form-control result mb-1" placeholder="Result description"/>
                        <div className="input-group">
                            <input className="form-control image" placeholder="Image URL for this result" onInput={evt => this.handleTest(evt) } />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button" onClick={evt => this.handleSubmit(evt)}>Test Image</button>
                            </span>
                        </div>
                    </div>
                </div>
            </form>       
        ) 
    }
}