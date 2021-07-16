const router = require("express").Router();
const CategoryController = require("../controllers/CategoryController");
const auth = require("../middleware/auth");

router.post("/AddCategory", auth, CategoryController.AddCategory);

router.get("/GetCategory", auth, CategoryController.GetCategory);

router.delete("/Delete/:id", auth, CategoryController.DeleteCategory);

module.exports = router;
