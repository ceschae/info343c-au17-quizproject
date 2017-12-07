import React from 'react';
import firebase from 'firebase/app';
import ResultCard from "./ResultCard";

export default class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curUser:"",
            quizzesSnapshot: undefined
        };
    }
    componentWillMount() {
        this.authUnsub = firebase.auth().onAuthStateChanged(user => {
            this.setState({curUser:user})
        });
        firebase.database().ref("results").on("value",
        snapShot => this.setState({quizzesSnapshot: snapShot}));
    }
    componentWillUnmount() {
        this.authUnsub();
        firebase.database().ref("results").off("value");
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
        return (
            <div>
                <h3>Profile</h3>
                <p><strong>Display Name: </strong> {this.state.curUser.displayName}</p>
                <p><strong>Email: </strong>{this.state.curUser.email}</p>
                <div>
                    <h4>Quizzes You've Taken:</h4>
                        {quizzes}
                </div>
            </div>
        )
    }
}