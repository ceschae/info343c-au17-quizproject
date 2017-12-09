import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            authenticated: false,
            email: "",
            password: "",
            confirmPassword: "",
            displayName: ""
        };
    }

    componentWillMount() {
        this.authUnsub = firebase.auth().onAuthStateChanged(user => 
          this.setState({authenticated: user !=null}));
      }
      componentWillUnmount() {
        this.authUnsub();
      }
    
    handleSubmit(evt) {
        evt.preventDefault();
        
        if(this.state.password === this.state.confirmPassword) {
            this.setState({errorMessage: undefined}); //working: true,
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(user => 
                    user.updateProfile({
                        displayName: this.state.name
                    })
                )
                .catch(err => this.setState({errorMessage: err.message}));
              //  .then(()=> this.setState({working: false}));
        } else {
            this.setState({errorMessage: "Passwords don't match"});
            this.setState({password:"", confirmPassword:""});              
        }            
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
                this.state.authenticated && <Redirect to="/quiz" />
            }
            <h1 className="text-secondary">Sign Up</h1>
            
            <form onSubmit={evt => this.handleSubmit(evt)}>
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
                    <input type="password" className="form-control" 
                    placeholder="Confirm Password" value={this.state.confirmPassword}
                    onInput={evt => this.setState({confirmPassword: evt.target.value})} required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" 
                    placeholder="Display Name" value={this.state.name}
                    onInput={evt => this.setState({name: evt.target.value})} required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-secondary">Sign Up!</button>
                </div>
            </form>
            <p>Already have an account? <Link className="text-danger" to="/">Sign In!</Link></p>
        </div>
      ) 
    }
}