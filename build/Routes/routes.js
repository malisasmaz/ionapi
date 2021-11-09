"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var controller_1 = require("../controller/controller");
var Routes = /** @class */ (function () {
    function Routes() {
        this.controller = new controller_1.Controller();
    }
    Routes.prototype.routes = function (app) {
        app.route('/api/')
            .get(function (request, response) {
            response.status(200)
                .send({
                message: "GET request successful."
            });
        });
        app.route('/api/login')
            .post(this.controller.login);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map