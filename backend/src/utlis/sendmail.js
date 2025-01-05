const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: 'paulkoshy890@gmail.com',
    pass: 'dragonslayer',
  },
});

module.exports = transporter;