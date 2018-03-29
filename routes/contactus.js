const express= require('express');
const router= express.Router();
const jwt= require('jsonwebtoken');
const contact = require('../models/contactus');


router.post('/', (req, res, next)=>{
  let newContact= new contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
  });


contact.addUser(newContact, (err, user)=>{
  if(err){
      res.json({success: false, msg: 'failed to add feedback'});
  }
  else{
      res.json({success: true, msg: 'feedback saved'});
  }
});


});

module.exports= router;
