const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  QuestionName: {
    type: String,
  },
  options: {
    option1: {
      type: String,
      trim: true,
    },
    option2: {
      type: String,
      trim: true,
    },
    option3: {
      type: String,
      trim: true,
    },
    option4: {
      type: String,
      trim: true,
    },
  },
  rightoption: {
    type: String,
    trim: true,
  },
  marks:{
    type:Number
  }
});

module.exports = mongoose.model("questions", QuestionSchema);
