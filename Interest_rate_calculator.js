let res=interest_rate();
console.log("Your Interest Rate: "+res+"%");

function interest_rate()
{
   let month= prompt("Enter The No.of Months: ");
   let rate=0;
   if(month<3) rate=5.8;
   else if(month>=3 && month <=6) rate=6.5;
   else if(month>=7 && month<=9) rate=6.8;
   else if(month>=10) rate=7;
   else rate="Please enter a positive integer";

   return rate;
}
