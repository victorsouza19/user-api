const express = require('express'),
app = express(),
router = express.Router(),
HomeController = require('../controllers/HomeController');

router.get('/', HomeController.index);

module.exports = router;