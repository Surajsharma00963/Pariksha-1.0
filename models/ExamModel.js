const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  ExamTitle: {
    text: String,
  },
  UserID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  UserName:{
    type: mongoose.Schema.Types.String,
    ref: "users",
  },
  ExamDescription:{
    type:String
  },
  CategoryName: {
    type:String
  },
  ExamDate:{
    type:String
  },
  ExamCode:{
    type:String
  },

  Questions: [
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:"questions"
      }
  ],
});

module.exports = mongoose.model("exams", ExamSchema);
