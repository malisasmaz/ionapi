"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var app_1 = require("../app");
var supertest_1 = require("supertest");
describe("Index Test", function () {
    it('should always pass', function () {
        chai_1.expect(true).to.equal(true);
    });
});
it('should POST /api/student', function () {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.agent(app_1.default)
                        .post('/api/student').send({
                        "firstName": "testName",
                        "lastName": "testLastName",
                        "dateOfBirth": "2021-10-02T22:16:59.000Z",
                        "courseName": "testCourseName",
                        "hours": "25",
                        "price": 1234.56
                    })];
                case 1:
                    res = _a.sent();
                    chai_1.expect(res.status).to.equal(200);
                    chai_1.expect(res.body).not.to.be.empty;
                    chai_1.expect(res.body.data).not.to.be.empty;
                    chai_1.expect(res.body.data).to.be.an("object");
                    chai_1.expect(res.body.error).to.be.null;
                    chai_1.expect(res.body.data.message).is.equal("Successfully Saved.");
                    return [2 /*return*/];
            }
        });
    });
});
it('should GET /student', function () {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.agent(app_1.default).get('/api/student')];
                case 1:
                    res = _a.sent();
                    chai_1.expect(res.status).to.equal(200);
                    chai_1.expect(res.body).not.to.be.empty;
                    chai_1.expect(res.body.data).not.to.be.empty;
                    chai_1.expect(res.body.data).to.be.an("array");
                    chai_1.expect(res.body.error).to.be.null;
                    return [2 /*return*/];
            }
        });
    });
});
it('should Update last added student', function () {
    return __awaiter(this, void 0, void 0, function () {
        var resultStudent, lastStudentId, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.agent(app_1.default).get('/api/student')];
                case 1:
                    resultStudent = _a.sent();
                    lastStudentId = resultStudent.body.data[resultStudent.body.data.length - 1].id;
                    return [4 /*yield*/, supertest_1.agent(app_1.default)
                            .put("/api/student/" + lastStudentId).send({
                            "firstName": "testNameUpdated",
                            "lastName": "testLastNameUpdated",
                            "dateOfBirth": "2021-10-02T22:16:59.000Z",
                            "courseName": "testCourseNameUpdated",
                            "hours": "35",
                            "price": 9876.56
                        })];
                case 2:
                    res = _a.sent();
                    chai_1.expect(res.status).to.equal(200);
                    chai_1.expect(res.body).not.to.be.empty;
                    chai_1.expect(res.body.data).not.to.be.empty;
                    chai_1.expect(res.body.data).to.be.an("object");
                    chai_1.expect(res.body.error).to.be.null;
                    chai_1.expect(res.body.data.message).is.equal("Successfully Updated.");
                    return [2 /*return*/];
            }
        });
    });
});
it('should DELETE last added student', function () {
    return __awaiter(this, void 0, void 0, function () {
        var resultStudent, lastStudentId, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.agent(app_1.default).get('/api/student')];
                case 1:
                    resultStudent = _a.sent();
                    lastStudentId = resultStudent.body.data[resultStudent.body.data.length - 1].id;
                    return [4 /*yield*/, supertest_1.agent(app_1.default).delete("/api/student/" + lastStudentId)];
                case 2:
                    res = _a.sent();
                    chai_1.expect(res.status).to.equal(200);
                    chai_1.expect(res.body).not.to.be.empty;
                    chai_1.expect(res.body.data).not.to.be.empty;
                    chai_1.expect(res.body.data).to.be.an("object");
                    chai_1.expect(res.body.error).to.be.null;
                    chai_1.expect(res.body.data.message).is.equal("Successfully Removed.");
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=index.test.js.map