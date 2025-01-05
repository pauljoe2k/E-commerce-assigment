const UserModel = require('../models/user.model.js');
const ErrorHandler = require('../utils/ErrorHandler.js');
const transporter = require('../utils/sendmail.js');
const jwt = require('jsonwebtoken');

require('dotenv').config({
  path: '../config/.env',
});

async function CreateUSer(req, res) {
  const { Name, email, password } = req.body;

  const CheckUserPresent = await UserModel.findOne({
    email: email,
  });

  if (CheckUserPresent) {
    const error = new ErrorHandler('Already Present in DB', 400);

    return res.status(404).send({
      message: error.message,
      status: error.statusCode,
      success: false,
    });
  }

  const newUser = new UserModel({
    Name: Name,
    email: email,
    password: password,
  });
  // send mail
  // 1. Link (http://localhost:5173/activation/{token})
  // 2. send the above link as mail
  // 3. direct the user to activation page
  const data = {
    Name,
    email,
    password,
  };
  const token = generateToken(data);
  await transporter.sendMail({
    to: 'naayaankumar@gmail.com',
    from: 'naayaankumar@gmail.com',
    subject: 'verification email from follow along project',
    text: 'Text',
    html: `<h1>Hello world   http://localhost:5173/activation/${token} </h1>`,
  });

  await newUser.save();

  return res.send('User Created Successfully');
}

// 1. Check if there is any user already present with same creds
// 2. if yes/true send respinse as user already exists
// 3. if no /false cerate a user in database

const generateToken = (data) => {
  // jwt
  const token = jwt.sign(
    { name: data.name, email: data.email },
    process.env.SECRET_KEY
  );
  return token;
};
const verifyUser = (token) => {
  const verify = jwt.verify(token, process.env.SECRET_KEY);
  if (verify) {
    return verify;
  } else {
    return false;
  }
};

async function verifyUserController(req, res) {
  const { token } = req.params;
  try {
    if (verifyUser(token)) {
      return res
        .status(200)
        .cookie('token', token)
        .json({ token, success: true });
    }
    return res.status(403).send({ message: 'token expired' });
  } catch (er) {
    return res.status(403).send({ message: er.message });
  }
}

module.exports = { CreateUSer, verifyUserController };