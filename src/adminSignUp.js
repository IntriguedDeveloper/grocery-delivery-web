import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
const firebaseApp = initializeApp({
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
adminForm['submitButton'].addEventListener('click', (e) => {
    let email = adminForm['emailID'].value;
    let password = adminForm['shopUID'].value;
    userDetails = {
        email : email,
        password : password
    }
    createUserWithEmailAndPassword(auth, email, password).then((result) =>{
        return result.getIdToken().then((idToken) => {
            console.log(idToken);
            // options = {
            //     method : "POST",
            //     headers : {
            //         "Content-Type": 'application/json'
        
            
            //     },
            //     body : JSON.stringify(userDetails),
            // }
            // fetch('/adminAuthSignUp', options).then((msg) =>{
            //     console.log(msg);
            // }).catch((error) =>{
            // console.log(error)})
        })
    })
    
    
})