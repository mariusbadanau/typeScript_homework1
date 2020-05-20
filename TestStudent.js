"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var student1 = new Student_1.Student("Marius", "marius.badanau@endava.com");
var prof1 = new Teacher_1.Teacher("ProfIT", "profIT@gmail.com", "Learn TypeScript WorkShop");
student1.register();
student1.login();
student1.getAssignments(prof1);
prof1.register();
prof1.getStudents(student1);
//# sourceMappingURL=TestStudent.js.map