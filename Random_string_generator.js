        let seq='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let len=prompt("Enter the length: ");
        let res='';
        for(let i=0;i<len;i++)
        {
          res+=seq.charAt(Math.floor(Math.random()*(seq.length)));
        }
        console.log(res);
