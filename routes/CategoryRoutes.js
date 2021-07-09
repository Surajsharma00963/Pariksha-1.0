const router = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

router.post('/AddCategory',CategoryController)

router.get('/showCategory',CategoryController)