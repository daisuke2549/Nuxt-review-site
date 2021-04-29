import firebase from 'firebase'
 
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAjWLc0lx9S6yFqe-IRw21rhZx2YifO-8U",
    authDomain: "shop-review-app-594de.firebaseapp.com",
    projectId: "shop-review-app-594de",
    storageBucket: "shop-review-app-594de.appspot.com",
    messagingSenderId: "606376163200",
    appId: "1:606376163200:web:92923fb8b5312c2628f365",
    measurementId: "G-1S22GV8JG8",  
  })
}
 
export default firebase