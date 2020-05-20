import { Teacher } from "./Teacher";

export class Student implements IUsers {
    
    name: string;
    email: string;
    password: string;
    teacher:Teacher;

    constructor(name:string, email:string){
        this.name = name;
        this.email = email;
       
    }

    register(): void {
        console.log("Student " + this.name +" has registered with succes ussing email " +this.email)
    }
    login(): void {
        console.log("Student " + this.name +" login with succes")
    }
    delete(): void {
        console.log("Student " + this.name +" deleted with succes")
    }

    getAssignments(teacher){
        console.log(`Assignment ${teacher.assignment} received from profesor ${teacher.name} with email ${teacher.email}`)

    }

}

