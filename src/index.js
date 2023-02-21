import{initializeApp} from 'firebase/app'
import{getAuth, onAuthStateChanged} from 'firebase/auth'
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAvyHaaA_uyq20uttPUBjjbMlEnSHXKfzY",
  authDomain: "grocery-deliver-web.firebaseapp.com",
  databaseURL: "https://grocery-deliver-web-default-rtdb.firebaseio.com",
  projectId: "grocery-deliver-web",
  storageBucket: "grocery-deliver-web.appspot.com",
  messagingSenderId: "105319589520",
  appId: "1:105319589520:web:3f1f1ed66cd2edab491a15",
  measurementId: "G-M0DC48G621"
})
const auth = getAuth(firebaseApp);
 onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("logged in");
    }
    else{
        console.log("no user");
    }
 });