let inp=prompt("Enter the Number: ");
let res=fact(inp)
console.log("The Factorial of "+inp+" is : "+res);

function fact(num)
{
    if(num==1 || num==0) return 1
    else return num*fact(num-1)
}
