  // Array of integers
      let arr1=[1,2,3,4,5];
      
      //Array of ccharacters
      let arr2=['a','b']

      //Mixed Array
      let arr3=[1,2,'a','b',"HEY",10.59,-28,"Last"];

      console.log(arr3);
      console.log("First Element: "+arr3[0]);
      console.log("Last Element : "+arr3[arr3.length-1]);

      console.log(typeof arr2);

      //2D array
      let matrix=[[1,2,3],[4,5,6],[7,8,9]];
      console.log(matrix);
      console.log(matrix[0][2]);

      //Adding elements using push
      let empty=['a','b','c','d'];
      empty.push('e');
      console.log(empty);

      //Removing last element
      empty.pop();
      console.log(empty);
      console.log(empty.pop());

      //Removing first element
      console.log(empty.shift());
      console.log(empty)

      //Adding element in first place
      empty.unshift('p');
      console.log(empty);

      //Deletion using splice
      empty.splice(2,1);
      console.log(empty);

      empty.push('m','n','o','p');
      console.log(empty);

      empty.splice(2,2);
      console.log(empty);

      //insertion using splice
      empty.splice(2,0,'A',"B");
      console.log(empty);

      //insertiona and deletion
      empty.splice(5,1,'Q',"W","E",'R');
      console.log(empty);

      //concating array
      let ar1=['a','b','c'];
      let ar2=[1,2,3];
      let joined_arr=ar1.concat(ar2);
      console.log(joined_arr);
