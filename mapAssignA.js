

console.log(`======step 1=====`);
let arrayNum =[20,11,40,25,23,11,9,31,60,2,19]
console.log(`add 10 into each element of array:`);

const numberToAdd = 10;
const newArray = arrayNum.map(item => item + numberToAdd);
console.log(newArray);




console.log(`======step 2=====`);
console.log(`cube of each array element is:`);

const array = arrayNum.map((element)=>{

    return element * element*element;

});

console.log(array);



console.log(`======step 3=====`);
console.log(`Add index value into each corresponding array element:`);



// Using map to transform elements
let res = arrayNum.map(function (val, index) {
    return  value= val + index ;
})

console.log(res)