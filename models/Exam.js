const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  ExamName: {
    text: String,
    trim: true,
  },
  CategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategorySchemea",
  },
  Questions: [
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:"QuestionSchema"
      }
  ],
});

module.exports = mongoose.model("exam", ExamSchema);
