const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, 'Please enter the name:'],
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
      unique: [true, 'Please enter a unique email address'],
    },
    password: {
      type: String,
      required: [true, 'Please enter the password'],
    },
    address: [
      {
        city: { type: String },
        country: { type: String },
        add1: { type: String },
        add2: { type: String },
        zip: { type: String },
        addressType: { type: String },
      },
    ],
    role: {
      type: String,
      default: 'user',
    },
    avatar: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
  },
  { versionKey: false }
);
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
