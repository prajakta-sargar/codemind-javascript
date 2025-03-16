
console.log(`==========Step 1=========`);
 


var greaterNumber = function(n1,n2){
    var result= n1 > n2 ? n1 : n2;
    console.log(`Greater Number is:${result}`);
   
}
 greaterNumber(10,-10);
 greaterNumber(800,899);


 console.log(`==========Step 2=========`);
 
 console.log(`check  the number is EVEN or ODD`);
 

 var isEvenOrOddNum =function (num) {
    var result =(num%2==0 )? "True":"False";
   
    return result;

        
 }
 
 var returnValue = isEvenOrOddNum(29);
 console.log(`the number is 29:${returnValue}` );
 
 var returnValue =isEvenOrOddNum(44);
 console.log(`the number is 44:${returnValue}` );
 var returnValue =isEvenOrOddNum(0);
 console.log(`the number is 0:${returnValue}` );
 var returnValue = isEvenOrOddNum(101);
 console.log(`the number is 101:${returnValue}` );

 console.log(`==========Step 3=========`);
 console.log(`=== String to number conversion ===`);

 var wordLength=function (word){
    var result =(word.length%2==0 )? "EVEN":"ODD";
   
    return result;

        
 }
 
 var returnValue = wordLength("javascript");
 console.log(`the word javascript is :${returnValue}` );
 var returnValue = wordLength("Developer");
 console.log(`the word Developer is :${returnValue}` );
 var returnValue = wordLength("Google");
 console.log(`the word google  is :${returnValue}` );

