const mongoose= require('mongoose');
const config = require('../config/database');


const contact= mongoose.Schema({
  name:{
      type:String
  },

  email:{
      type:String,
      reqired: true
  },

  phone:{
      type:String,
      reqired: true
  },

  message:{
      type:String,
      reqired: true
  }
});

module.exports= mongoose.model('contactus', contact);

module.exports.addUser= function(contact, callback){
  contact.save(callback);
}
