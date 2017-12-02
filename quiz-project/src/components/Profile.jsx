import React from 'react';
import firebase from 'firebase/app';

export default class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curUser:""
        };
    }
    componentWillMount() {
        this.authUnsub = firebase.auth().onAuthStateChanged(user => {
            this.setState({curUser:user})
        });
    }
    componentWillUnmount() {
        this.authUnsub();
    }
    render() {
        return (
            <div>
                <h3>Profile</h3>
                <p><strong>Display Name: </strong> {this.state.curUser.displayName}</p>
                <p><strong>Email: </strong>{this.state.curUser.email}</p>
            </div>
        )
    }
}