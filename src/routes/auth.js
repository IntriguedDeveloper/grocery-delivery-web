var admin = require('firebase-admin'); //import firebase-admin module for admin perms

var serviceAccount = require("../service-account-key.json"); //import an instance of service account key for firebase


admin.initializeApp({ //initialize firebase admin app
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://grocery-deliver-web-default-rtdb.firebaseio.com"
});

const express = require('express')
const router = express.Router();
//?Admin Login Section
router.route('/adminLogin').get((req, res) => { //GET request for admin login page
    res.render('adminlogin.pug');//render the admin login file when GET request
  }).post(async (req, res) => { //POST request on admin login page (async function)
    const idToken = req.body.idToken; //user ID Token instance
    await admin.auth().verifyIdToken(idToken).then((claims) => { //verify ID token using firebase admin SDK
      if (claims.admin === true) { //check if admin claims in user ID token is true => strict JS equality
        let response = { //response object 
          adminmessage: "Hi admin",
        }
        res.send(JSON.stringify(response)); //send success message as response
      }
      else {
        let response = { //send unsuccessful message if user is not an admin
          adminmessage: "Bye admin",
        }
        res.setHeader('Content-Type', 'application/json') 
        res.end(JSON.stringify(response));
      }
    })
  
  })
  
  //?Admin SignUp Section
  router.route('/adminsignup').get((req, res) => {
    res.render('adminsignup.pug');
  }).post( async (req, res) => {
    const idToken = req.body.idToken;
  
    const claims = await admin.auth().verifyIdToken(idToken);
    await admin.auth().setCustomUserClaims(claims.sub, {
      admin: true,
    });
    let response = {
      message: 'Admin Account created successfully!',
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
    console.log(idToken);
  })
  
  
  //?User login section 
  router.get('/userlogin', (req, res) => {
    res.render('loginpage.pug')
  })
  
  
  //?User Signup Section 
  router.get('/usersignup', (req, res) => {
    res.render('signup_page.pug')
  })
  
  //?Forgot Password Section
  router.get('/forgotuserpassword', (req, res)=> {
    res.render('forgot_password.pug');
  })
  module.exports = router;