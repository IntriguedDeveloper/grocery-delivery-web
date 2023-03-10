const express = require('express');
const app = express(); //initialize express

const path = require('path') //require the path module
app.use(express.json()); //express JSON parser initialization
const port = 5000; //port initialization
app.locals.basedir = 'views', path.join(__dirname, '/'); //define the base directory
app.set('views', [path.join(__dirname, '../public/auth'), __dirname + '/views', path.join(__dirname, '../public/client')]) //multiple directories to search for the files to serve and render
app.set('view engine', 'pug'); //set the view engine to pug for client side rendering of .pug files



const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

app.get('/', (req, res)=>{
  res.render('./home/clienthomepage.pug')
})
//?Listen on Specific Port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
