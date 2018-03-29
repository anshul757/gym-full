const express= require('express');
const router= express.Router();
const passport= require('passport');
const jwt= require('jsonwebtoken');
const User = require('../models/users');



//register
router.post('/register', (req, res, next)=>{
  let newUser= new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
});

User.addUser(newUser, (err, user)=>{
     if(err){
         res.json({success: false, msg: 'failed to register user'});
     }
     else{
         res.json({success: true, msg: 'user registered'});
     }
});
});

//authenticate
router.get('/authenticate', (req, res, next)=>{
  User.findOne({
    name: req.body.name,
    function(err, user){
      if(err) throw err;

      if(!user)
      {
        res.json({success: false, message: 'authentication failed, user not found'});
      }

      else if(user)
      {
        if(user.password != req.body.password)
        {
          res.json({success: false, message: 'authentication failed, wrong password'});
        }
        else
        {
          var token = jwt.sign({ id: user._id }, database.secret, {
            expiresIn: 86400 // expires in 24 hours
          });

          res.status(200).send({ auth: true, token: token });
        }
      }
    }
  });
});


module.exports= router;
