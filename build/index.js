"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var app_1 = require("./app");
var PORT = 8080;
app_1.default.listen(PORT, function () {
    console.info('Express server listening on http://localhost:8080');
});
//# sourceMappingURL=index.js.map