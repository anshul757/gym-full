const mongoose= require('mongoose');
const config = require('../config/database');

const caloriemeterschema= mongoose.Schema({
  name:{
      type:String
  },

  catogery:{
      type:String,
      reqired: true
  },

  calorie:{
      type:String,
      reqired: true
  },

  qty:{
      type:String,
      reqired: true
  }
});


const CalorieMeter= module.exports= mongoose.model('Cm',caloriemeterschema);

module.exports.addFood = (newFoodItem, callback)=>{
  //if(err) throw err
  newFoodItem.save(callback);
}
