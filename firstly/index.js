const express = require('express');
const app = express();
const path = require('path');

const expo = require('./routes');

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//var home = (req, res) => {res.sendFile(path.join(__dirname, 'public','index.html'));};

// app.get('/', expo.home); // home yerine home
// eğer çok istek olunca /home/user fln oluyo onun yerine new file module

app.use('/',expo)
app.use('/login',expo)


app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});  