class college{
    // Data members
    // Constructor
    constructor( name , department,  university, Establish , location, ){
        this.name = name;
        this.department = department;
        this.university = university;
        this.Establish = Establish;
        this.location = location; 
    }

    // Member Function
    details(){
        console.log(`Name: ${this.name}, Department: ${this.department}, University: ${this.university}, Establish Year: ${this.Establish} , Location: ${this.location}`);
        
    }
}

// Object
let college1 = new college("Sangola College", "Computer Science", "Solapur", 1997, "Sangola");
college1.details();

let college2 = new college("SP College", "Mechanical", "Pune", 1998, "Pune");
college2.details();

let college3 = new college("Bharati Vidyapeeth", "Civil", "Mumbai", 1999, "Mumbai");

college3.details();

let college4 = new college("fergusson", "Mathematic", "Pune", 2000, "pune");

college4.details();



