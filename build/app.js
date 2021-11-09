"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes/routes");
// import { connection } from "./connection/connection";
var bodyParser = require("body-parser");
var _a = require("./utils/utils"), handleCors = _a.handleCors, logStream = _a.logStream;
var morgan = require("morgan");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.app.use(handleCors);
        this.app.use(morgan("combined", { stream: logStream() }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.routePrv = new routes_1.Routes();
        this.routePrv.routes(this.app);
        // connection.then(() => {
        //     console.log("MongoDb Connected Successfully");
        // }).catch((err) => { console.log("MongoDb Connection failed: ", err) });
    }
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map