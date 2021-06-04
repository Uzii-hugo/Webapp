import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDfYbhAkhDwPwO6eB8XJk13BdqcmytuETI",
    authDomain: "database-tarot.firebaseapp.com",
    databaseURL: "https://database-tarot-default-rtdb.firebaseio.com/",
    projectId: "database-tarot",
    storageBucket: "database-tarot.appspot.com",
    messagingSenderId: "210225345482",
    appId: "1:210225345482:web:99f1687d89c1f00f019533"
});

export default firebaseConfig;