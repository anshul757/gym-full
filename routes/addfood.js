const express= require('express');
const app= express();
const router= express.Router();
const multer= require('multer');
var file = require('file-system');
var fs = require('fs');
const mongoose= require('mongoose');
var Schema = mongoose.Schema;
const config = require('../config/database');



var Food = new Schema(
  {
       filename: String,
    name: {
      type:String,
      reqired: true
    },

    catogery: {
      type:String,
      reqired: true
    },

    for: {
      type:String,
      reqired: true
    },

    dietprefrence: {
      type:String,
      reqired: true
    },

    calories: {
      type:String,
      reqired: true
    },

    protiens: {
      type:String,
      reqired: true
    },

    carbohydrates: {
      type:String,
      reqired: true
    },

    fats: {
      type:String,
      reqired: true
    },

    saturatedfats: {
      type:String,
      reqired: true
    },

    monosaturatedfats: {
      type:String,
      reqired: true
    },

    polysaturatedfats: {
      type:String,
      reqired: true
    },

    sugars: {
      type:String,
      reqired: true
    },
    
    fibres: {
      type:String,
      reqired: true
    },
  }
);
var addFood = mongoose.model('food',Food);


var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage }).single('FoodImg');

router.post('/', function (req, res) {
  upload(req, res, function (err,kkk) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return
    }
    var newFood = new addFood();
    newFood.name = req.body.name;
    newFood.catogery = req.body.catogery;
    newFood.for = req.body.for;
    newFood.dietprefrence = req.body.dietprefrence;
    newFood.calories = req.body.calories;
    newFood.protiens = req.body.protiens;
    newFood.carbohydrates = req.body.carbohydrates;
    newFood.fats = req.body.fats;
    newFood.saturatedfats = req.body.saturatedfats;
    newFood.monosaturatedfats = req.body.monosaturatedfats;
    newFood.polysaturatedfats = req.body.polysaturatedfats;
    newFood.sugars = req.body.sugars;
    newFood.fibres = req.body.fibres;

    newFood.save(function(){
      res.json({
        name:req.body.name,
        filename:req.file.originalname,
        type:req.body.catogery,
        for:req.body.for,
        dietprefrence:req.body.dietprefrence,
        calories:req.body.calories,
        proteins:req.body.protiens,
        carbohydrates: req.body.carbohydrates,
        fats: req.body.fats,
        saturatedfats: req.body.saturatedfats,
        monosaturatedfats: req.body.monosaturatedfats,
        polysaturatedfats: req.body.polysaturatedfats,
        sugars: req.body.sugars,
        fibres: req.body.fibres,
        success: true,
        message: 'image uploaded successfully'
      });
    });
  })
});


router.post('/viewfood', (req, res, next)=>{
  let meal = (req.body.mealNo) ? parseInt((req.body.mealNo)) : 0,
      snack = (req.body.snackNo) ? parseInt((req.body.snackNo)) : 0;
  
  let limit = meal + snack;

  const prefrence = {
    dietprefrence: req.body.dietPrefrence,
    for: req.body.for
  };
  console.log(prefrence, limit, typeof limit);
  addFood.find(prefrence).limit(limit).exec(function(err, data){
      if(err){
          res.json({success: false, msg: JSON.parse(err)});
      }
      else{
          res.json({success: true, msg: 'sucess', data : data});
      }
  });
});






module.exports= router;