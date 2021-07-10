const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  QuestionName: {
    type: string,
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

module.exports = mongoose.model("question", QuestionSchema);
