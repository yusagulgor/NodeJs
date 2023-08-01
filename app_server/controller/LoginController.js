var User = require('../models/User');

module.exports.indexGet = (req,res) => {
    res.render('login'); // ejs adı 
};

module.exports.indexPost = (req,res) => {
    console.log(req.body);
    res.render('login',{
        username: req.body.username,
        password: req.body.password
    }); // ejs adı 
};

module.exports.signUpGet = (req,res) => {
    res.render('signUp'); // ejs adı
};

module.exports.signUpPost = (req,res) => {

    var newUser = new User({
        name : req.body.name,
        surname : req.body.surname,
        email: req.body.email,
        username : req.body.username,
        password : req.body.password
    });
    newUser.save((err)=>{
        
    })

    console.log(newUser);

    res.render('signUp'); // ejs adı
};