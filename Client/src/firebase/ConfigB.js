import firebase from 'firebase/app';
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfYbhAkhDwPwO6eB8XJk13BdqcmytuETI",
    authDomain: "database-tarot.firebaseapp.com",
    databaseURL: "https://database-tarot-default-rtdb.firebaseio.com",
    projectId: "database-tarot",
    storageBucket: "database-tarot.appspot.com",
    messagingSenderId: "210225345482",
    appId: "1:210225345482:web:99f1687d89c1f00f019533"
};
// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
//firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
