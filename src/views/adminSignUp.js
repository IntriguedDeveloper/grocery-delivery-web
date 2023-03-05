import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
const adminForm = document.querySelector('#adminForm');
adminForm['submitButton'].addEventListener('click', (e) => { //when submit button is clicked 
    let email = adminForm['emailID'].value;
    let password = adminForm['shopUID'].value;
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => { //sign up the user with given credentials
        const user = userCredential.user;
        user.getIdToken().then((idToken) => { //get the user id token
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ idToken: idToken }), //transform the JWT to JSON string
            }
            fetch('/adminsignup', options).then(response => response.json()).then(data => { //make a post request to the server to set admin custom claims to true to give admin access to the specific user
                console.log(data);
            })
        })

    })
})