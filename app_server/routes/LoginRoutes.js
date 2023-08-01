var express = require('express');
var router = express.Router();
var ctrlLogin = require('../controller/LoginController');

router.get('/', ctrlLogin.indexGet); // controller dan helen module
router.post('/', ctrlLogin.indexPost); // controller dan helen module
router.get('/signup', ctrlLogin.signUpGet); // controller dan helen module
router.post('/signup', ctrlLogin.signUpPost); // controller dan helen module

module.exports = router;
