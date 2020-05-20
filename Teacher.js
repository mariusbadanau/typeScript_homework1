"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(name, email, assignment) {
        this.name = name;
        this.email = email;
        this.assignment = assignment;
    }
    Teacher.prototype.register = function () {
        console.log("Teacher " + this.name + " has registered with succes ussing email " + this.email);
    };
    Teacher.prototype.login = function () {
        console.log("Teacher " + this.name + " login with succes");
    };
    Teacher.prototype.delete = function () {
        console.log("Teacher " + this.name + " deleted with succes");
    };
    Teacher.prototype.getStudents = function (student) {
        console.log("Get student name = " + student.name + " with email = " + student.email);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map