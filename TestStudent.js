"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var student1 = new Student_1.Student("Marius", "marius.badanau@endava.com", "1234abc");
var prof1 = new Teacher_1.Teacher("ProfIT", "profIT@gmail.com", "abc1234");
student1.register();
student1.login();
student1.delete();
student1.getAssignments();
console.log('-------------------------------------------------------------');
prof1.register();
prof1.login();
prof1.getStudents();
//# sourceMappingURL=TestStudent.js.map