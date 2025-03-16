console.log(`=====Step 1========`);
function stringHandsOn() {
    var str ="  Hey you are doing good, keep it up  ";

    
    console.log(`Given string is: ${str}`);
    console.log(`The string length is: ${str.length}`);

    console.log(`======= step 3=======`);
    var result  = str.trim();
    console.log(`After trim: ${result}`);

     console.log(`Remove space after length: ${result.length}`);

     console.log(`======= step 4=======`);

  // console.log(${str.length} - ${result.length});
  var resulttrim =str.length - result.length ;
  console.log(`total space avaliable in string ${resulttrim}`);

  console.log(`======= step 5=======`);

  console.log(`The first letter ${result.charAt(0)}, Last letter ${result.charAt(result.length-1)}`);
  var words= result.split(" ");
  console.log(`Total number of words ${words.length}`);

  console.log(`======= step 6=======`);
  var indexx=result.indexOf("good");
  console.log(`index of good :${indexx}`);


  console.log(`======= step 7=======`);

  var subresult=result.substring(22);
  console.log(`substring from index 22: ${subresult}`);

  console.log(`======= step 8=======`);

  var endwords = result.endsWith("up");
  console.log(`string is ends with words "up": ${endwords }`);

  console.log(`======= step 9=======`);
  
  var stratwords =result.startsWith("Hey");
  console.log(`string is start with words "Hey": ${stratwords}`);



}stringHandsOn();