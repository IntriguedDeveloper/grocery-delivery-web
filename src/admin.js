const express = require('express');
const app = express();
const admin = require('firebase-admin');
const serviceAccountKey = require("./service-account-key.json")
admin.initializeApp{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://grocery-deliver-web-default-rtdb.firebaseio.com"
      });
}
app.get('/adminAuthSignUp', (req, res) =>{
   
})