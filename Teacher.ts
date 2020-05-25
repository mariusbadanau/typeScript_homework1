import { Student } from "./Student";
import { User } from "./User";

export class Teacher extends User {

    students: string[]=['student1', 'student2', 'student3'];
    getStudents(){
        console.log(`Get Students: ${this.students}`);
    }

}