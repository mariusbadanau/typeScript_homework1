import { Teacher } from "./Teacher";
import { User } from "./User";

export class Student extends User {
   assignments: string[]= ['assignment1', 'asignment2', 'assignment3'];

    getAssignments(){
        console.log(`Student has Assignments: ${this.assignments}`)

    }

}

