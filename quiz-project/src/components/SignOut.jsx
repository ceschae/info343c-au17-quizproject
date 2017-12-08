import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import constants from "./constants";
import 'firebase/auth';
import 'firebase/database';

export default class SignOutView extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            authenticated: true
        };
    }

    componentWillMount() {
        this.authUnsub = firebase.auth().onAuthStateChanged(user => {
            this.setState({authenticated: user !=null});
        });
    }

    componentWillUnmount() {
    this.authUnsub();
    }
    
    handleSignOut(evt) {
        evt.preventDefault();
        this.setState({errorMessage: undefined}); 
        firebase.auth().signOut()
        .catch(err => this.setState({errorMessage: err.message}));
    }
    
	render() {
        return (
            <div>
                {
                     this.state.authenticated ? undefined :
                    <Redirect push to="/"/>
                } 
                <button className="btn btn-link text-danger" onClick={evt => this.handleSignOut(evt)}>Sign Out</button>
            </div>

        );
    }   
}