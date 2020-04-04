const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DanceClass = new Schema({
  title: {
    type: String,
    required:true
  },
  instructor: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
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