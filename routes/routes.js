const express = require('express'),
app = express(),
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


module.exports = router;