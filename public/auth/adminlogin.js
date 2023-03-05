import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseApp = initializeApp({ //initialize firebase app using firebase config details
    apiKey: "AIzaSyAvyHaaA_uyq20uttPUBjjbMlEnSHXKfzY",
    authDomain: "grocery-deliver-web.firebaseapp.com",
    databaseURL: "https://grocery-deliver-web-default-rtdb.firebaseio.com",
    projectId: "grocery-deliver-web",
    storageBucket: "grocery-deliver-web.appspot.com",
    messagingSenderId: "105319589520",
    appId: "1:105319589520:web:3f1f1ed66cd2edab491a15",
    measurementId: "G-M0DC48G621"
})
const auth = getAuth(firebaseApp); //auth instance
const adminloginform = document.querySelector('#admin');
adminloginform['submit'].addEventListener('click', (e) => { //action when submit button is clicked
    let email = adminloginform['adminEmail'].value;
    let password = adminloginform['vendorUID'].value;
    signInWithEmailAndPassword(auth, email, password).then((userCredentials) => { //call signInWithEmailandPassword firebase method and pass the required params
        const user = userCredentials.user;
        user.getIdToken().then((idToken) => { //get userIDToken
            let options = {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ idToken: idToken }),
            }
            fetch('/adminlogin', options).then(response => response.json()).then(data => {
                console.log(data);
                console.log(idToken);
            });
        })
    })

})
