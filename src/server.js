const express = require('express');
const app = express(); //initialize express

const path = require('path') //require the path module
app.use(express.json()); //express JSON parser initialization
const port = 5000; //port initialization
app.locals.basedir = 'views', path.join(__dirname, '/'); //define the base directory
app.set('views', [path.join(__dirname, '../public/auth'), __dirname + '/views']) //multiple directories to search for the files to serve and render
app.set('view engine', 'pug'); //set the view engine to pug for client side rendering of .pug files

var admin = require('firebase-admin'); //import firebase-admin module for admin perms

var serviceAccount = require("./service-account-key.json"); //import an instance of service account key for firebase


admin.initializeApp({ //initialize firebase admin app
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://grocery-deliver-web-default-rtdb.firebaseio.com"
});


//?Admin Login Section
app.get('/adminLogin', (req, res) => { //GET request for admin login page
  res.render('adminlogin.pug');//render the admin login file when GET request
})
app.post('/adminlogin', async (req, res) => { //POST request on admin login page (async function)
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
app.get('/adminsignup', (req, res) => { //render admin signup page on GET request 
  res.render('adminsignup.pug');
})

app.post('/adminsignup', async (req, res) => { 
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
app.get('/userlogin', (req, res) => {
  res.render('loginpage.pug')
})


//?User Signup Section 
app.get('/usersignup', (req, res) => {
  res.render('signup_page.pug')
})


//?Listen on Specific Port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
