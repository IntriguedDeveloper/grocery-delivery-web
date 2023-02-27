const express = require('express');
const app = express();
const path = require('path')
const port = 3000;
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../public/auth'));
app.locals.basedir = 'views', path.join(__dirname, '/')
app.get('/adminLogin', (req, res) =>{
  res.render('adminlogin.pug', {});
})
app.get('/userlogin', (req, res) => {
  res.render('loginpage.pug')
})
app.get('/usersignup', (req, res)=>{
  res.render('signup_page.pug')
})
app.listen(port, () =>{
  console.log(`Server running on http://localhost:${port}`)
})