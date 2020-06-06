import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as firebase from 'firebase/app'


// Config Firebase
var firebaseConfig = {
  apiKey: "AIzaSyArGrICHpjY41J-3P1xllzYht8uctbiDo8",
  authDomain: "ahoranosotrasrd.firebaseapp.com",
  databaseURL: "https://ahoranosotrasrd.firebaseio.com",
  projectId: "ahoranosotrasrd",
  storageBucket: "ahoranosotrasrd.appspot.com",
  messagingSenderId: "223690789386",
  appId: "1:223690789386:web:2ab8ee4d43516a19c545f3",
  measurementId: "G-S0XZEG1JNP"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
