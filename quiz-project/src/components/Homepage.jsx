import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import SignOutView from './SignOut';
import ProfileView from './Profile';

import firebase from 'firebase/app';

export default class Homepage extends React.Component {

    render() {
        let quizRef = firebase.database().ref(this.props.match.params.chanName);   
        //chanName is gonna be either: /quiz, /quiz/create, profile, ...     
        return (
            <div className="container">
                <ul className="nav nav-tabs nav-fill mb-3">
                    <li className="nav-item">
                        <Link to = "/home" className="nav-link" onClick={()=>window.location.reload()}> 
                            Quizzes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link" onClick={()=>window.location.reload()}>
                        Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/profile" className="nav-link" onClick={()=>window.location.reload()} > Profile</Link>
                    </li>
                    <li className="nav-item">
                        <SignOutView />
                    </li>
                </ul>

    {/*  Format of the display of Quizzes
                <div className="container">
                    <div class="row">
                        <div class="col-12 col-sm-4 col-md-3 col-lg-2 d-flex">
                            <div class="card">
                                <img class="card-img-top" src="" alt="" title=""></img>
                            <div class="card-body">
                                <h4 class="card-title"> </h4>
                            </div> 
                            </div>
                        </div>
                    </div>
                </div> 
    */}
            {
                (window.location==="/profile") ?
                <div className="container">
                    <ProfileView />
                </div> : undefined //where we put the quizzes
            }

            </div>

        )
    }
}
