const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DanceClass = new Schema({
  title: {
    type: String,
    required:true
  },
  instructor: {
    type: String,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  imgUrl:{
    type: String,
  },
  isSeries: {
    type: Boolean
  },
  isDropInCLass: {
    type: Boolean
  },
  isPartOfSeries: {
    type: Boolean
  }
 
});

module.exports = mongoose.model("Dance-Class",DanceClass)