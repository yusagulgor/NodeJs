// Route kısmı 
var routeHome = require('./HomeRoutes');
var routeLogin = require('./LoginRoutes');

//

module.exports = (app) => {
    app.use('/',routeHome);
    app.use('/login',routeLogin);
}