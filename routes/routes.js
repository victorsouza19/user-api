const express = require('express'),
router = express.Router(),
HomeController = require("../controllers/HomeController"),
UserController = require("../controllers/UserController");

router.get("/", HomeController.index);

// Users
router.get("/users", UserController.index);
router.get("/users/:id", UserController.findOne);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.edit);
router.delete("/users/:id", UserController.delete);
router.post("/users/recover", UserController.recoverPassword);
router.post("/users/changepassword", UserController.changePassword);


module.exports = router;