const employee = `
{
"name": "Aleix  Melon",

    "id":"E00245",
    "role":["Dev","DBA"],
    "Age":23,
    "Doj":"11-12-2019",
    "married":false,
 
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country":"Austria",
        "referred-by":"E0012"
 
    }
}
`;


const employeeObj = JSON.parse(employee);
console.log(typeof employeeObj);
console.log(employeeObj);
console.log(`log on : ${employeeObj.role[0]}`);

const lastName = employeeObj.name.split(" ");
console.log(`Last Name  : ${lastName[2]}`);

console.log(`Joing year   : ${employeeObj.Doj}`);






