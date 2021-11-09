var fs = require("fs");
var path = require("path");
var handleCors = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Access, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json();
    }
    next();
}, logStream = function () {
    return fs.createWriteStream(path.join(__dirname, "./access.log"), { flags: "a" });
};
module.exports = { handleCors: handleCors, logStream: logStream };
//# sourceMappingURL=utils.js.map