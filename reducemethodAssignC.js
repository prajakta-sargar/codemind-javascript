console.log(`======step 1=====`);

let arrayNum=[20,11,40,25,37,49,9,90,60,2,19];


const sum = arrayNum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`the sum of all number by using reduce method is :${sum}`);


console.log(`======step 2=====`);

const sumMultiplesOf5 = arrayNum.filter(num => num % 5 === 0)  // Filter numbers that are multiples of 5
    .reduce((acc, curr) => acc + curr, 0);  // Sum them using reduce
console.log("Sum of multiples of 5:", sumMultiplesOf5);