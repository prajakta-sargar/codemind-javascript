function isEven(num){
    var result = num%2; 
    console.log(`Reminder is: ${result}`);
    console.log(`Reminder 0 means: EVEN, or it is ODD: ${result}`);
 }
 isEven(5);



 function isEven(num){
    console.log(`====== Ternary Operator ======`);
    var result = num%2==0 ? "EVEN" : "ODD";
    console.log(`Given number ${num} is ${result}`);
 }
 isEven(5);
 isEven(10);


 var show = function(str){
    var strLength = str.length;
    var result = strLength * strLength;
    return result;
}
var square = show("JavaScript");
console.log(`Given word JavaScript and it's length square is: ${square}`);

var square = show("Google Chrome");
console.log(`Given word Google Chrome and it's length square is: ${square}`);


var wordLengthOpr = function(){
    var str = "I am UI Developer";
    var wordLength = str.length;
    var words = str.split(" ").length;
    var result = wordLength/words;
    console.log(result);
    var result = wordLength * words
    console.log(result);
}
wordLengthOpr();