const express= require('express');
var fs = require("fs");
const path= require('path');
const mongoose= require('mongoose');
const bodyparser= require('body-parser');
const passport= require('passport');
const app= express();
const cors= require('cors');
const users=require('./routes/users');
const cm=require('./routes/caloriemeter');
const config=require('./config/database');
const exercise= require('./routes/addexercise');
const subscribe= require('./routes/subscribe');
const addfood= require('./routes/addfood');
const addyoga= require('./routes/addyoga');
const contactus= require('./routes/contactus');

//connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('connected to database' +config.database);
})

// on error connecting to database
mongoose.connection.on('error', (err)=>{
    console.log('error connecting to database' +err);
})

//port no
const port=3000;

//cors middleware
app.use(cors());

//index route
app.get('/', (req, res)=>{
  res.send('app works');
});


//set static folder
app.use(express.static(path.join(__dirname, 'dist')));

//bodyparser middleware
app.use(bodyparser.json());

app.use('/users', users);
app.use('/caloriemeter', cm);
app.use('/addexercise', exercise);
app.use('/subscribe', subscribe);
app.use('/addfood', addfood);
app.use('/addyoga', addyoga);
app.use('/contactus', contactus);
app.get('/uploads/:name', function (req, res) {
    fs.exists('.'+(req.url.replace(/%20/g, ' ')), function(exists){
        console.log(req.url, exists);
        if (exists) {
            return res.sendfile(path.resolve('.'+ (req.url.replace(/%20/g, ' '))));
        }else{
            return res.status(400).send({ status:false, message: "File not exist." });
        }
    })
}); 

//start server
app.listen(port, ()=>{
console.log('server started on port' +port);
});

// node mailer code start
'use strict';



