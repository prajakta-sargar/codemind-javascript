var city = "  Pune  ";
console.log(`Before trim: ${city}, and it's length: ${city.length}`);
var trimResult = city.trim();
console.log(`After trim: ${trimResult}, and it's length: ${trimResult.length}`);

console.log(` Count the total number of spaces available in the start and in the end `);
var totalSpaces = city.length - trimResult.length;
console.log(`Total spaces available: ${totalSpaces}`);