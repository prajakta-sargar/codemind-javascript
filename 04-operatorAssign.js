console.log(`=======step 1========`);



    var show = function(str){
        var strLength = str.length;
        
        console.log(`Given word is javascript And its length is: ${strLength}`);
        var result = strLength * strLength;
        return result;
    }
    var square = show("JavaScript");
    console.log(`Given word JavaScript and its length square is: ${square}`);
    
    console.log(`=======step 2========`);
    var square = show("Google Chrome");
   
    console.log(`Given word is Google and it's length square is: ${square}`);


    console.log(`=======step 3========`);
    var square = show("Web  Developer");
    console.log(`Given word Web Developer and it's length square is: ${square}`);

    console.log(`=======step 4========`);

    var wordLengthOpr = function(){

        var str = "I am UI Developer";
    
        var wordLength = str.length;
    
        var words = str.split(" ").length;
    
        var result = wordLength/words;
        console.log(` Given string is  I am UI Developer and it's lenght is : ${result}`);
    
        console.log(`division result is :${result}`);
    
        var result = wordLength * words
        console.log(`multiplication result is :${result}`);
        

    
     
    
    }
    
    wordLengthOpr();
   
    
    

    
