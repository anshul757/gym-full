const bcrypt= require('bcrypt');
const mongoose= require('mongoose');
const config = require('../config/database');

const userschema= mongoose.Schema({
    name:{
        type:String
    },

    email:{
        type:String,
        reqired: true
    },

    username:{
        type:String,
        reqired: true
    },

    password:{
        type:String,
        reqired: true
    }
});

const User= module.exports= mongoose.model('User', userschema);

module.exports.getUserById= (id, callback)=>{
  User.findById(id, callback);
}

module.exports.getUserByUserName= (username, callback)=>{
  const query= {username : username}
  user.findOne(query, callback);
}

module.exports.addUser = (newUser, callback)=>{
  bcrypt.genSalt(10, (err, salt)=>{
  bcrypt.hash(newUser.password, salt, (err, hash  )=>{
      if(err) throw err
      newUser.password= hash;
      newUser.save(callback);
  });
  });
}
