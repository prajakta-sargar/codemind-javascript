
console.log(`====step 1====`);
console.log(`Number which are greater than 50`);

let arrayNum=[20,11,40,25,37,49,9,90,60,2,19];

const gtr = arrayNum.filter((num) => num >50);
console.log(gtr); 


console.log(`====step 2====`);
console.log(`all the even number in array is:`);

const even = arrayNum.filter((num) => num % 2 ==0);
console.log(even); 



console.log(`====step 3====`);
console.log(`all the odd number in array is:`);

const odds = arrayNum.filter((num) => num % 2 === 1);
console.log(odds); 



console.log(`====step 4====`);
console.log(`Multiplay by 5 in the element of array :`);


const mul = arrayNum.filter((num) => num %5==0);
console.log(mul); 

console.log(`====step 5====`);
console.log(` display  the number between 20 and 50:`);


var between = arrayNum.filter(function(item) {
    return (item > 20 && item < 50);
  });

  console.log(between);
  



