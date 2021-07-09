const router = require("express").Router();
const AdminController = require("../controllers/AdminController");

router.post("/register", AdminController.register);

router.post("/activation", AdminController.activationEmail);

router.post("/login", AdminController.login);

router.post('/refresh_token', AdminController.getAccessToken)

module.exports = router;
