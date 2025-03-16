let professor = {
    name: "Uttam",
    age: 54,
    
    subject: "Maths",
    salary: 90000,
    designation:"professor",


}
console.log(professor);



console.log("====Step 2 === Nested Objects =======");
let dprofessor = {
    firstName: "Uttam",
    lastName: "Sargar",
    age: 56,
    college: "Sangola Vidyamandir Sangola",
    degree:{
       engineering: "CSC",
       PG: "Msc in Maths",
       PHD: "Advance in Maths",
       medel: "Gold Medalist in Maths",
        
    }

}

console.log(dprofessor.degree);

console.log("====== Step 3=== Add Array =========");
professor.certificates=[ "Hacker Rank Participation", "Certificates in IFE course", "Certificates in Advance Programming", "Certificates in Master in Maths", ];
console.log(professor.certificates);

console.log("====== Step 4=== After Object creation , Add New Property =========");
professor.experience= 14 ;
console.log(` Total Experience : ${professor.experience} `);



console.log("====== Step 5=== Modify Existing Property=========");


professor.name = "Ganesh";

professor.age = 54;
professor.subject = "Maths";
professor.salary = 90000;
professor.designation = "professor";
console.log(professor);



console.log("====== Step 7=== Add new certificates in certificates array=========");
professor.certificates.splice(2, 0, "Oracle Certificate");
console.log(professor.certificates);

console.log("====== Step 8=== log last element of  array=========");
professor.Certificate = ["Certificates in Master in Maths" ] ;
console.log(professor.Certificate);


console.log("==========Task 9===Using forin loop ========");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key} ==>${element}`);
        
    }
}
