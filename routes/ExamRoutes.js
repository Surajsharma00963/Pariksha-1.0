const router = require("express").Router();
const ExamController = require("../controllers/ExamContoller");

const auth = require("../middleware/auth");

router.post("/AddExam", auth, ExamController.AddExam);

router.get("/GetExam", auth, ExamController.GetExam);

router.patch("/AddQuestion/:id",auth, ExamController.AddQuestions);

router.get("/ViewQuestions/:id",auth,  ExamController.ViewQuestions);

router.delete("/Delete/:id", auth, ExamController.DeleteExam);





module.exports = router;
