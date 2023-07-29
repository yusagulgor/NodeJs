var express = require('express');
var router = express.Router();

var controller = require('./experote');;

router.get('/', controller.home);
router.get('/login', controller.login);

module.exports = router;