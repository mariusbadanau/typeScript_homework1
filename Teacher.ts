import { Student } from "./Student";

export class Teacher implements IUsers {
    name: string;
    email: string;
    password: string;
    assignment:string;
    student:Student;
    
    constructor(name:string, email:string, assignment:string){
        this.name = name;
        this.email = email;
        this.assignment = assignment;
        
    }

    register(): void {
        console.log("Teacher " + this.name +" has registered with succes ussing email " +this.email)
    }
    login(): void {
        console.log("Teacher " + this.name +" login with succes")
    }
    delete(): void {
        console.log("Teacher " + this.name +" deleted with succes")
    }
   
    getStudents(student){
        console.log("Get student name = " + student.name + " with email = " + student.email);
    }

}