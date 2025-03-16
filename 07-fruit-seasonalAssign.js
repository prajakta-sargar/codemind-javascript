
console.log(`=========display first and last element of an array =========`);

const fruits = [ "Banana","Orange","Apple" ,"Mango", "Water melon"];
console.log(`Given Array is :${fruits}`); 
console.log(`First Element of Array is: ${fruits[0]}`);
console.log(`Last Element of Array is: ${fruits[fruits.length - 1]}`);

console.log(`=========  Add element papaya before banana=========`);

console.log(`Given Array is :${fruits}`); 
fruits.splice(0, 0, "Papaya");
console.log(`After Adding:${fruits}`);

console.log(`=========      Remove  Mango=========`);


console.log(`Given Array is :${fruits}`);
const index = fruits.indexOf("Mango");
if (index > -1) {
    fruits.splice(index, 1);
}
console.log(`After Removing:${fruits}`);

console.log(`=========      Add pinaple at last position=========`);

console.log(`Given Array is :${fruits}`);
fruits.push("Pinaple");
console.log(`After Adding:${fruits}`);

console.log(`=========    Add DragonFruit before WaterMelon  =========`);

console.log(`Given Array is :${fruits}`);
const index1 = fruits.indexOf("Water melon");
if (index1 > -1) {
    fruits.splice(index1, 0, "Dragon Fruit");
}
console.log(`After Adding:${fruits}`);

console.log(`=========    Replace Orange with Kivi  =========`);

console.log(`Given Array is :${fruits}`);
const index2 = fruits.indexOf("Orange");
if (index2 > -1) {
    fruits[index2] = "Kivi";
}
console.log(`After Replacing:${fruits}`);


console.log(`=========    Display element at index 1 to 4 =========`);

console.log(`Given Array is :${fruits}`);
const fruits1 = fruits.slice(1, 5);
console.log(`Elements at index 1 to 4:${fruits1}`);


console.log(`=========    Display last 3 element =========`);

console.log(`Given Array is :${fruits}`);
const fruits2 = fruits.slice(-3);
console.log(`Last 3 Elements:${fruits2}`);







