const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 3000;

// const { MongoClient } = require('mongodb');
// const uri = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(uri);

var db = require('./app_server/models/db');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'app_server', 'views'));

// EJS kısmı
var ejsLayouts = require("express-ejs-layouts");
app.use(ejsLayouts);

// Login
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Public klasörünü kullanıma açma 
app.use('/public',express.static(path.join(__dirname, 'public')));

// Yönlendiriciler ekleniyor
require('./app_server/routes/RouteManager')(app);

var User = require('./app_server/models/User');

var newUser = new User({
    name : 'yusa',
    surname : 'gulgor',
    username : 'yusa123',
    password : '12345'
});

newUser.save(function(err){
    if(err){
            console.log(err);
    }   else {
        console.log('Kayıt başarılı');
    }
});


app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});  


//ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const path = require('path');
// const port = 3000;

// const uri = 'mongodb://127.0.0.1:27017/MyDatabase'; // MongoDB bağlantı URL'si

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'app_server', 'views'));

// // EJS kısmı
// var ejsLayouts = require('express-ejs-layouts');
// app.use(ejsLayouts);

// // Login
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Public klasörünü kullanıma açma
// app.use('/public', express.static(path.join(__dirname, 'public')));

// // Yönlendiriciler ekleniyor
// require('./app_server/routes/RouteManager')(app);

// var User = require('./app_server/models/User');

// (async () => {
//   try {
//     var newUser = new User({
//       name: 'yusa',
//       surname: 'gulgor',
//       username: 'yusa123',
//       password: '12345',
//     });

//     // Save the new user asynchronously using async/await
//     await newUser.save();
//     console.log('Kayıt işlemi başarılı!');

//     // MongoDB'ye bağlanma işlemi
//     await mongoose.connect(uri, {
//       useNewUrlParser: true, // Yeni bağlantı seçeneği
//       useUnifiedTopology: true, // Yeni bağlantı seçeneği
//       serverSelectionTimeoutMS: 30000, // 30 saniye
//       socketTimeoutMS: 45000,
//     });
//     console.log('MongoDB sunucusuna bağlandı');

//     app.listen(port, () => {
//       console.log(`Sunucu çalışıyor: http://localhost:${port}`);
//     });
//   } catch (err) {
//     console.error('Bir hata oluştu:', err);
//   }
// })();

