let inp=prompt('Enter the Range: ')
let arr=[]
prime(inp)


function prime(num)
{
    if(num>=2){
    for(let val=2;val<=num;val++)
    {
    
        let temp=0;
        for(let i=2;i<=val/2;i++)
        {
            if(val%i==0)
            {
                temp=1;
                 break;
            }
        }
        if(temp!=1) 
        {
            
             arr.push(val);
        }
}
    }
    else console.log("Enter range greater than or equal to 2")
}

console.log(arr)
