import { Student } from "./Student"
import { Teacher } from "./Teacher";



let student1 = new Student("Marius", "marius.badanau@endava.com");
let prof1 = new Teacher("ProfIT","profIT@gmail.com","Learn TypeScript WorkShop");

student1.register();
student1.login();
student1.getAssignments(prof1);

prof1.register();
prof1.getStudents(student1);