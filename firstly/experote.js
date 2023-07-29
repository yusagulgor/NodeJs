// module.exports = (yazi) => {
//     console.log("merhaba " + yazi)
// };

const path = require('path');


module.exports.home = (req, res) => {res.sendFile(path.join(__dirname, 'public','index.html'));};
module.exports.login = (req, res) => {res.sendFile(path.join(__dirname, 'public','login.html'));};

