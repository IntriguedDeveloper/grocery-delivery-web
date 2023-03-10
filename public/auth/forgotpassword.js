import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
const firebaseApp = initializeApp({ //initialize firebase app using project config details
    apiKey: "AIzaSyAvyHaaA_uyq20uttPUBjjbMlEnSHXKfzY",
    authDomain: "grocery-deliver-web.firebaseapp.com",
    databaseURL: "https://grocery-deliver-web-default-rtdb.firebaseio.com",
    projectId: "grocery-deliver-web",
    storageBucket: "grocery-deliver-web.appspot.com",
    messagingSenderId: "105319589520",
    appId: "1:105319589520:web:3f1f1ed66cd2edab491a15",
    measurementId: "G-M0DC48G621"
});
const auth = getAuth(firebaseApp);

const forgotpass = document.querySelector('#forgotpass');
forgotpass['confirmButton'].addEventListener('click', () => {
    let email = forgotpass['Email'].value;
    sendPasswordResetEmail(auth, email);
})