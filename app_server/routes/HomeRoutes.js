var express = require('express');
var router = express.Router();
var ctrlHome = require('../controller/HomeController');

/* GET home page. */
router.get('/', ctrlHome.index);

module.exports = router;