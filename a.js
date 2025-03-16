var arr = [4,5,7,8,14,45,76];
var filtered = arr.filter(function(element, index, array) {
  return (index % 2 === 0);
});
console.log(filtered);
