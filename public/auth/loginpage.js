import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
const firebaseApp = initializeApp({ //initialize app using firebase config details
  apiKey: "AIzaSyAvyHaaA_uyq20uttPUBjjbMlEnSHXKfzY",
  authDomain: "grocery-deliver-web.firebaseapp.com",
  databaseURL: "https://grocery-deliver-web-default-rtdb.firebaseio.com",
  projectId: "grocery-deliver-web",
  storageBucket: "grocery-deliver-web.appspot.com",
  messagingSenderId: "105319589520",
  appId: "1:105319589520:web:3f1f1ed66cd2edab491a15",
  measurementId: "G-M0DC48G621"
});
let isSignedIn = false; //variable to store if user is signed in 
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => { //if Auth State has changed then do actions
  if (user != null) {
    isSignedIn = false;
  }
  else {
    isSignedIn = true;
  }
});
const form = document.querySelector('#loginForm');
form['submitButton'].addEventListener('click', (e) => { //when submit button is clicked
  const email = form['email'].value;
  const password = form['pass'].value;
  console.log(isSignedIn);

  if (!isSignedIn) {
    signInWithEmailAndPassword(auth, email, password) //signInWithEmailandPassword with the given user credentials
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Logged In")
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
})
