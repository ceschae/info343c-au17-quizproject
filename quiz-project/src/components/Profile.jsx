import React from 'react';
import firebase from 'firebase/app';
import ResultCard from "./ResultCard";
import AuthoredCard from "./AuthoredCard";
import constants from "./constants";

import styles from "./Profile.css";

import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curUser:"",
            quizzesSnapshot: undefined,
            authoredSnapshot: undefined
        };
    }
    componentWillMount() {
        this.authUnsub = firebase.auth().onAuthStateChanged(user => {
            this.setState({curUser:user})
        });
        firebase.database().ref("results").on("value",
        snapShot => this.setState({quizzesSnapshot: snapShot}));
        firebase.database().ref("quizzes").on("value",
        snapShot => this.setState({authoredSnapshot: snapShot}));
    }
    componentWillUnmount() {
        this.authUnsub();
        firebase.database().ref("results").off("value");
        firebase.database().ref("quizzes").off("value");
    }
    render() {
      //  let quizRef = firebase.database().ref("results");   
        if(!this.state.quizzesSnapshot) {
            return <div>Loading... Please be patient</div>;
        }
        if(!this.state.authoredSnapshot) {
            return <div>Loading... Please be patient</div>;
        }
        let quizzes= [];
        this.state.quizzesSnapshot.forEach(quizSnapshot => {
            (quizSnapshot.val().uid === this.state.curUser.uid) ?
            quizzes.push(<ResultCard key={quizSnapshot.key} 
                quizSnapshot = {quizSnapshot} />)
            : undefined;
        });
        let authored = [];
        this.state.authoredSnapshot.forEach(quizSnapshot => {
            (quizSnapshot.val().author.uid === this.state.curUser.uid) ?
            authored.push(<AuthoredCard key={quizSnapshot.key}
                quizSnapshot={quizSnapshot} />)
            : undefined
        });
        return (
            <div>
                <h2 className="text-danger">Your Profile</h2>
                <p><strong>Display Name: </strong> {this.state.curUser.displayName}</p>
                <p><strong>Email: </strong>{this.state.curUser.email}</p>
                { quizzes.length === 0 ?
                    <div className="profile-section">
                        <h4>It looks like you haven't taken any quizzes! Want to?</h4>
                        <button className="btn btn-outline-primary"><Link to={constants.routes.home} className="nav-link">Quizzes</Link></button>
                    </div> :
                    <div className="profile-section">
                        <h4>Quizzes You've Taken:</h4>
                        <div className="row">
                            {quizzes}
                        </div>
                    </div>
                }
                { authored.length === 0 ?
                    <div className="profile-section">
                        <h4>It looks like you haven't written any quizzes! Want to?</h4>
                        <button className="btn btn-outline-primary"><Link to={constants.routes.create} className="nav-link">Create</Link></button>
                    </div> :
                    <div className="profile-section">
                        <h4>Quizzes You've Written:</h4>
                        <div className="row">
                            {authored}
                        </div>
                    </div>
                }
            </div>
        )
    }
}