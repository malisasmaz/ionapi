"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var loginData = require("../source/data.json");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.login = function (req, res) {
        var filterResult = loginData.filter(function (record) { return record.userName === req.body.userName; });
        if (!filterResult.length) {
            res.json({ success: "false", errorMessage: "Wrong Username" });
            console.log("7");
        }
        else {
            console.log("8");
            if (filterResult[0].password === req.body.password) {
                res.json({ success: "true", errorMessage: null });
                console.log("9");
            }
            else {
                res.json({ success: "false", errorMessage: "Wrong Password" });
                console.log("9");
            }
        }
        // connection
        //     .then(async connection => {
        //         try {
        //             let student = await connection.manager.findOne(Student, req.params.studentId);
        //             res.json(student)
        //         } catch (error) {
        //             console.error("Error ", error);
        //             res.json({ error: error.message, data: null });
        //         }
        //     })
        //     .catch(error => {
        //         console.error("Error ", error);
        //         res.json({ error: error.message, data: null });
        //     });
    };
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map