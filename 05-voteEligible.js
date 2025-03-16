var VoteEligible = function (age){
    if (age==0 || age<0 || age>=130 || age==null) {
        console.log(`Invalid Data, Age:${age}`);

        
    } else {
        if (age>18) {
            console.log(`AGE: ${age},Eligible for vote`);
            
        } else {

             console.log(`AGE: ${age}, Not Eligible for vote`);
           
        }
        
    }
    
} 
VoteEligible(45);
VoteEligible(17);
VoteEligible(20);
 VoteEligible(-10);
 VoteEligible(200);
 VoteEligible(0);
 VoteEligible(null);