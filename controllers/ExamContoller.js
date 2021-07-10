const categories = require("../models/CategoryModel");
const users = require("../models/AdminModel");
const exams = require("../models/ExamModel");
const ExamModel = require("../models/ExamModel");

const ExamController = {
  AddExam: async (req, res) => {
    try {
      const user = await users.findById({ _id: req.users.id });
      console.log(user);
    //   const category = await categories.find({ UserID: user._id }).select('-_id')
    //   console.log(category);
      const newExam = new exams({
        ExamTitle: req.body.ExamTitle,
        UserID: user._id,
        UserName:user.name,
        ExamDescription: req.body.ExamDescription,
        CategoryName: req.body.CategoryName,
        ExamDate: req.body.ExamDate,
        ExamCode: req.body.ExamCode,
      });
      await newExam.save();
      res.json({ msg: "Exam Added" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  GetExam: async (req, res) => {
    try {
      const user = await users.findById({ _id: req.users.id });
      console.log(user);
      const exam = await exams.find({ UserID: user._id });
      res.json(exam)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = ExamController;
