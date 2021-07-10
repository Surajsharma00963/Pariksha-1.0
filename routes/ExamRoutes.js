const router = require("express").Router();
const ExamController = require("../controllers/ExamContoller");

const auth = require("../middleware/auth");

router.post("/AddExam", auth, ExamController.AddExam);
router.get("/GetExam", auth, ExamController.GetExam);
module.exports = router;
