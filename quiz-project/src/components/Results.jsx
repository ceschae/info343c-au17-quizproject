import React from 'react';

import { FacebookButton } from "react-social";
import { Share } from 'react-twitter-widgets'

import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

export default class Results extends React.Component {
    componentDidMount() {
        window.scrollTo(0,document.body.scrollHeight);        
    }
    
    render() {
        let url = window.location.href;
        let appId = '134114333946019';
        let style = {
            'objectFit': 'cover',
            height: '400px'
        }
        return (
            <div className="card mb-5">
                <div className="card-body">
                    <img className="card-img-top mb-3" style={style} src={this.props.image} />
                    <h4 className="card-title">{this.props.description}</h4>
                    <p>Share this quiz with your friends!</p>
                    <FacebookButton url={url} appId={appId} className="btn btn-primary btn-sm mb-2">
                    <i className="fa fa-facebook-square"></i> Share
                    </FacebookButton>
                    <Share url={url}></Share>
                    <button className="btn btn-success btn-block"
                        onClick={() => {window.location.hash = "/home"}}>
                        View All Quizzes</button>
                </div>
            </div>
        )  
    }
}