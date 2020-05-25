import { Student } from "./Student"
import { Teacher } from "./Teacher";



let student1 = new Student("Marius", "marius.badanau@endava.com", "1234abc");
let prof1 = new Teacher("ProfIT","profIT@gmail.com","abc1234");

student1.register();
student1.login();
student1.delete();

student1.getAssignments();
console.log('-------------------------------------------------------------')

prof1.register();
prof1.login();
prof1.getStudents();