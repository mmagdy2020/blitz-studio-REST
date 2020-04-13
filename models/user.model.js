const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  isMiuStudent: {
    type: Boolean
  },
  password: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: '/images/blitz-studio-icon.jpg'
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model("User", User)