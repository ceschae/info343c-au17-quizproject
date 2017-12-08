import React from 'react';
import firebase from 'firebase/app';
import ResultCard from "./ResultCard";
import AuthoredCard from "./AuthoredCard";

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
                <h2>Profile</h2>
                <p><strong>Display Name: </strong> {this.state.curUser.displayName}</p>
                <p><strong>Email: </strong>{this.state.curUser.email}</p>
                <div>
                    <h4>Quizzes You've Taken:</h4>
                    <div className="row">
                        {quizzes}
                    </div>
                </div>
                <div>
                    <h4>Quizzes You've Written:</h4>
                    <div className="row">
                        {authored}
                    </div>
                </div>
            </div>
        )
    }
}