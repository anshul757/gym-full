const express= require('express');
const router= express.Router();
const jwt= require('jsonwebtoken');
const subscribe = require('../models/subscribe');


router.post('/', (req, res, next)=>{
  let newSubscriber= new  subscribe({
    email: req.body.email,
});

subscribe.addSubscriber(newSubscriber, (err, user)=>{
  if(err){
      res.json({success: false, msg: 'failed to subscribe user'});
  }
  else{
      res.json({success: true, msg: 'user subscribed'});
  }
});

});


module.exports= router;
