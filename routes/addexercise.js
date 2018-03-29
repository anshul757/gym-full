const express= require('express');
const app= express();
const router= express.Router();
const multer= require('multer');
var file = require('file-system');
var fs = require('fs');
const mongoose= require('mongoose');
var Schema = mongoose.Schema;
const config = require('../config/database');



var Exercise = new Schema(
  {
    filename: String,
    catogery: {
      type:String,
      reqired: true
    }
  }
);
var Exsi = mongoose.model('exercise',Exercise);




var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage }).single('ExerciseImg');




router.post('/', function (req, res) {
  upload(req, res, function (err,kkk) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return
    }
    var newItem = new Exsi();
     newItem.filename = req.file.originalname;
    newItem.catogery = req.body.category;
    newItem.save(function(){
      res.json({
        catogery:req.body.category,
        filename:req.file.originalname,
        success: true,
        message: 'image uploaded successfully'
      });
    });
  })
});


router.post('/viewimage', function(req, res){
  let categoryName = req.body.id || "";

  Exsi.find({ catogery: categoryName }).exec(function(err, data){
      if(err){
          res.json({success: false, msg: JSON.parse(err)});
      }
      else{
          res.json({success: true, msg: 'sucess', data : data});
      }
  });
})
module.exports= router;
