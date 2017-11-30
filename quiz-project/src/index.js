import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
var config = {
    apiKey: "AIzaSyBglLxj6F6HAZxpNUb9AFtbIeVO27MRkQA",
    authDomain: "info343c-qui.firebaseapp.com",
    databaseURL: "https://info343c-qui.firebaseio.com",
    projectId: "info343c-qui",
    storageBucket: "info343c-qui.appspot.com",
    messagingSenderId: "266267717218"
  };
  firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
