const categories = require("../models/CategoryModel");
const users = require("../models/AdminModel");
const exams = require("../models/ExamModel");
const questions = require("../models/Question");
const { request } = require("express");

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
        UserName: user.name,
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
      res.json(exam);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  AddQuestions: async (req, res) => {
    try {
      // const user = await users.findById({ _id: req.users.id });
      // console.log(user);
      // const exam = await exams.find({ UserID: user.id });
      // console.log(exam);
      const newQuestions = new questions({
        QuestionName: req.body.QuestionName,
        options:req.body.options ,
        rightoption: req.body.rightoption,
        marks: req.body.marks,
      });
      const { id } = req.params;
      console.log(id);
      const newQuestion = await questions.create(newQuestions);
      console.log(newQuestion._id);
      const newExam = await exams.findByIdAndUpdate(
        id,
        {
          $push: { Questions: newQuestion },
        },
        { new: true, useFindAndModify: false }
      );
      console.log(newExam);
      res.send(newExam);
      res.json({ msg: "Question Added" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  ViewQuestions: async (req, res) => {
    try {
      const user = await users.findById({ _id: req.users.id });
      console.log(user);
      const {id} = req.params
      console.log(id)
      const viewQuestions = await exams.findById(
        id,
        {
          "Questions._id": 1,
          "Questions.QuestionName": 1,
          "Questions.options": 1,
        }
      );
      res.json(viewQuestions);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = ExamController;
