const express= require('express');
const router= express.Router();
const jwt= require('jsonwebtoken');
const contact = require('../models/contactus');
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'gyme.anshul@gmail.com', // generated ethereal user
        pass: 'Iron@man' // generated ethereal password
    }
});

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
        } else {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            nodemailer.createTestAccount((err, account) => {
                // setup email data with unicode symbols
                let mailOptions = {
                    from: '"Gmye your electronic health coach" <gyme.anshul@gmail.com>', // sender address
                    to: newContact.email, // list of receivers
                    subject: 'Hello ✔', // Subject line
                    text: 'Thanks for contatcing us', // plain text body
                    html: '<b>Hello folks, <br>Thanks for contatcing us. We will reach you out soon</b>' // html body
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    // Preview only available when sending through an Ethereal account
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    res.json({success: true, msg: 'feedback saved'});
                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                });
            });
        }
    });
});


module.exports= router;
