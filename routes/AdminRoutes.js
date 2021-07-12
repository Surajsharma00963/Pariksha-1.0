const router = require("express").Router();
const AdminController = require("../controllers/AdminController");

const auth = require("../middleware/auth");

router.post("/register", AdminController.register);

router.post("/activation", AdminController.activationEmail);

router.post("/login", AdminController.login);

router.post("/refresh_token", AdminController.getAccessToken);

router.post("/forgotPassword", AdminController.forgotPassword);

router.post("/resetPassword", auth, AdminController.resetPassword);

router.get("/UserDetails", auth, AdminController.getUserInfo);

router.get("/logout", AdminController.logout);

router.patch("/update",auth,AdminController.updateUser)

module.exports = router;
