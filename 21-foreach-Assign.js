
console.log(`====Step 1====`);

const arrayNum = [1,-7,40,502,-77,91,0,108,89,-601];

 

arrayNum.forEach( ( element,index, ) => {

console.log( index, element );

} );


console.log(`====Step 2====`);

console.log(`Positive number is:` );
arrayNum.forEach(number => {
    if (number > 0) {

        console.log(`${number}`);
        

    }
});

console.log(`=====step 3====`);

console.log(` Negative number array is:`);

let res = arrayNum.filter(number => number < 0);

console.log(res)
 

console.log(`====Step  4====`);

console.log(`Even number is:` );
arrayNum.forEach(number => {
    if (number%2== 0) {

        console.log(`${number}`);
        

    }
});

console.log(`=====step5====`);



let sum = 0;
arrayNum.forEach(x => {
    sum += x;
});
console.log(`sum of array element is: ${sum}`);


console.log(`=====step 6======`);
console.log(`Even index array value is:`);


var filtered = arrayNum.filter(function(element, index, array) {
  return (index % 2 === 0);
});
console.log(filtered);


