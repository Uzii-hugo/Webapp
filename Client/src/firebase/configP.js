import firebase from 'firebase/app';
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFqGi9dxclOMxL6N3ebZdVWbLs9GDkvOU",
    authDomain: "upload-images-443c9.firebaseapp.com",
    projectId: "upload-images-443c9",
    storageBucket: "upload-images-443c9.appspot.com",
    messagingSenderId: "596249335373",
    appId: "1:596249335373:web:8c6e66b226714fbe502e04"
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
