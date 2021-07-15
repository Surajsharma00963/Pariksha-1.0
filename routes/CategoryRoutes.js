const router = require("express").Router();
const CategoryController = require("../controllers/CategoryController");
const auth = require("../middleware/auth");

router.post("/AddCategory", auth, CategoryController.AddCategory);

router.get("/GetCategory", auth, CategoryController.GetCategory);

module.exports = router;
