interface IUsers{
    //properties
    name:string;
    email:string;
    password:string;

    //methods
    register(): void;
    
    login(): void;
  
    delete(): void;

}