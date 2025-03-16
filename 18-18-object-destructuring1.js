const student = {
    name: "Jenny",
    city: "Pune",
    age: 24,
    pin: 411057,
    country: "India",
    isMarried: true
}

let { name, city, age, country, isMarried} = student;
console.log(name, city,age,country, isMarried);

const [n1, n2, n3="MyLove", n4=1]= ["Jenny", "Elon", "Stew"];
console.log(n1,n2,n3,n4);



const array = ["Jenny", "Elon", "Stew"];
const [ n1, n2, n3="MyLove", n4=1] = array;
console.log(n1,n2,n3,n4);
console.log(array);