

console.log("===step 1====Arrow Function - With no args or para and no return values");

let abc = () => {

    console.log("Good morning, Today is a Wednesday day");

}

abc();


console.log("===step 2====Arrow Function with arguments and no return value");

let mul = (p1, p2, P3=1) => {

    console.log(`Multiplication: ${p1*p2*P3}`);
 
 }
 
 mul(5 ,5,2);
 mul(10,4)


    console.log("===step 3====Arrow Function with arguments and return value");
 
let add = (p1, p2, p3, p4,p5 ) => {
    let result = p1+p2+p3+p4+p5;
    return result;
 }
  let addition = add(100,100, 200,349,756 );
 
  let str= add( "I am", " learning", " ES6", " Fetures", " in Depth");

  console.log(`Addition of given number is: ${addition}`);


    console.log(`Addition of given string is: ${str}`);


 