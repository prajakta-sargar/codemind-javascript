class Vehicle{
    // Data members
    // Constructor
    constructor(  name , numberplate, model, color, price, company, ){
        this.name = name;
        this.numberplate  = numberplate;
        this.model = model;
        this.color = color;
        this.price = price;
        this.company = company; 
    }

    // Member Function
    details(){
        console.log(`Name: ${this.name}, Number Plate: ${this.numberplate}, Model: ${ this.model}, Color: ${this.color}, Price: ${this.price}, Company: ${this.company}`);
        
    }
}
const car1 = new Vehicle("Unicorn", "MH12 1234", "2021", "Red", "10L", "Tata");
car1.details();


const car2 = new Vehicle("splender", "MH12 5678", "2021", "Blue", "12L", "Mahindra");

car2.details();

const car3 = new Vehicle("Royal Enfield", "MH12 9876", "2021", "Black", "15L", "Maruti");

car3.details();

const car4 = new Vehicle("Activa", "MH12 3456", "2021", "White", "20L", "Honda");

car4.details();


console.log("===================Task 2============================");


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



