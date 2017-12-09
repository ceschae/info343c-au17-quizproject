import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import constants from "./constants";
import firebase from 'firebase/app';

export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            email: "",
            password: "",
        };
    }

    componentWillMount() {
        this.authUnsub = firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState({authenticated: true});
            }
        });
      }
    componentWillUnmount() {
        this.authUnsub();
      }
    
    handleSignIn(evt) {
        evt.preventDefault();
        this.setState({errorMessage: undefined}); 
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(err => this.setState({errorMessage: err.message}))
        .then(()=> this.setState({email:"", password:""})); 
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.errorMessage ?
                    <div className="alert alert-danger">{this.state.errorMessage}</div>
                    : undefined
                }
                {
                    this.state.authenticated ? <Redirect to="/home" /> : <Redirect to="/" />
                }

                <h1 className="text-secondary">Sign In</h1>
                
                <form onSubmit={evt => this.handleSignIn(evt)}>
                    <div className="form-group"> 
                        <input type="email" className="form-control" 
                        placeholder="Email" value={this.state.email}
                        onInput={evt => this.setState({email: evt.target.value})} required/>    
                    </div>
                    <div className="form-group">    
                        <input type="password" className="form-control" 
                        placeholder="Password" value={this.state.password}
                        onInput={evt => this.setState({password: evt.target.value})} required/>    
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary">Sign In!</button>
                    </div>
                </form>
                <p>Don't yet have an account? <Link className="text-danger" to={constants.routes.signup}>Sign Up!</Link></p>
            </div>
      ) 
    }
}