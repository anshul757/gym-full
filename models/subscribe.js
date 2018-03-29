const mongoose= require('mongoose');
const config = require('../config/database');

const subscribeschema= mongoose.Schema({
  email:{
      type:String,
      reqired: true
  }
});

const Subs= module.exports= mongoose.model('Subs', subscribeschema);



module.exports.addSubscriber= function(newSubscriber, callback){
  newSubscriber.save(callback);
}
