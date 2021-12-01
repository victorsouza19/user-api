const express = require('express'),
router = express.Router(),
HomeController = require("../controllers/HomeController"),
UserController = require("../controllers/UserController"),
AdminAuth = require("../middleware/AdminAuth");

router.get("/", HomeController.index);

// Users
router.post("/users", UserController.create);
router.get("/users", AdminAuth, UserController.index);
router.get("/users/:id", AdminAuth, UserController.findOne);
router.put("/users/:id", AdminAuth, UserController.edit);
router.delete("/users/:id", AdminAuth, UserController.delete);
router.post("/users/recover", UserController.recoverPassword);
router.post("/users/changepassword", UserController.changePassword);
router.post("/login", UserController.login);

module.exports = router;