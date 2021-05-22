import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDLZ3MrDd-32ClKszYHLSZRh6rAjotXipw",
    authDomain: "login-tarot.firebaseapp.com",
    projectId: "login-tarot",
    storageBucket: "login-tarot.appspot.com",
    messagingSenderId: "483480214086",
    appId: "1:483480214086:web:1f5482c4c04064b8ed4847"
});

export default firebaseConfig;