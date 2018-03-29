const express= require('express');
const router= express.Router();
const passport= require('passport');
const jwt= require('jsonwebtoken');
const CM = require('../models/caloriemeter');


//add food items


router.post('/addfooditem', (req, res, next)=>{
  let newFoodItem= new CM({
    name: req.body.name,
    catogery: req.body.catogery,
    calorie: req.body.calorie,
    qty: req.body.qty,
});

CM.addFood(newFoodItem, (err, fitem)=>{
  if(err){
      res.json({success: false, msg: 'failed to add food item'});
  }
  else{
      res.json({success: true, msg: 'fooditem inserted'});
  }
});
});

router.get("/caloriemeter", (req, res, next) => {
    CM.aggregate([ 
      {
          $project:{
              "name":1,
              "calorie": 1
  
          }
      }
    ]).then(function(calorie, err) {
        console.log(err, calorie);
      res.json(calorie);
    });
  });
module.exports= router;
