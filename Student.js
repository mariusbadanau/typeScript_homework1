"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, email) {
        this.name = name;
        this.email = email;
    }
    Student.prototype.register = function () {
        console.log("Student " + this.name + " has registered with succes ussing email " + this.email);
    };
    Student.prototype.login = function () {
        console.log("Student " + this.name + " login with succes");
    };
    Student.prototype.delete = function () {
        console.log("Student " + this.name + " deleted with succes");
    };
    Student.prototype.getAssignments = function (teacher) {
        console.log("Assignment " + teacher.assignment + " received from profesor " + teacher.name + " with email " + teacher.email);
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map