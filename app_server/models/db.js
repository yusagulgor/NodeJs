var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/MyDatabase';

mongoose.connect(mongoDB, (err) => {
    if (err) {
        console.log('mongoose hataasi:' + err);
    } else {
        console.log('mongoose bağlandi:' + mongoDB);
    }
});

module.exports = mongoose;
