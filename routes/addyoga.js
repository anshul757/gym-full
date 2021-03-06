const express= require('express');
const app= express();
const router= express.Router();
const multer= require('multer');
var file = require('file-system');
var fs = require('fs');
const mongoose= require('mongoose');
var Schema = mongoose.Schema;
const config = require('../config/database');


var Yoga = new Schema(
  {
    filename: String,
    name: String,
    catogery: {
      type:String,
      reqired: true
    }
  }
);
var Yog = mongoose.model('yoga',Yoga);

var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage }).single('YogaImg');

router.post('/', function (req, res) {
  upload(req, res, function (err,kkk) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return
    }
    var newYoga = new Yog();
    newYoga.filename = req.file.originalname;
    newYoga.name = req.body.name;
    newYoga.catogery = req.body.category;
    newYoga.save(function(){
      res.json({
        catogery:req.body.category,
        name: req.body.name,
        filename:req.file.originalname,
        success: true,
        message: 'image uploaded successfully'
      });
    });
  })
});

router.post('/viewimage', function(req, res){
  let categoryName = req.body.id || "";

  Yog.find({ catogery: categoryName }).exec(function(err, data){
      if(err){
          res.json({success: false, msg: JSON.parse(err)});
      }
      else{
          res.json({success: true, msg: 'sucess', data : data});
      }
  });
})



module.exports= router;
