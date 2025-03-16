const array = [7, 15, 20, 3, 25, 2, 40];
const multipleArray = array.filter((element) => {
 return element % 5 === 0;
});
console.log(`Multiple of 5 are: ${multipleArray}`);

const sum = array.reduce((acc, element) => {
 return acc + element;
}, 0);
console.log(`Sum of all elements is: ${sum}`);

const evenArray = array.filter((element) => {
 return element % 2 === 0;
});
console.log(`Even numbers are: ${evenArray}`);  