const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DanceClass = new Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true

  },
  time: {
    type: String,
    required: true

  },
  imgUrl: {
    type: String,
    required: true
  },

  isSeries: {
    type: Boolean
  },

  seriesClass: [{ weekNumber: { type: String }, desc: { type: String }, day: { type: String }, timeWeekly: { type: String } }]
  ,
  isDropInCLass: {
    type: Boolean
  },
  isPartOfSeries: {
    type: Boolean
  }

});

module.exports = mongoose.model("Dance-Class", DanceClass)