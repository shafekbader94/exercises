const splice = function(arr , start , end , ...theArgs){
     let index = end-start-1;
     let array = []
 
     if(start == 0 && theArgs.length==0)
     {
         for(let i=0 ; i<arr.length; i++)
         {
             arr[i]=arr[i+1]
             if(arr[i] === undefined)
                arr.pop();
         }
     }

     else if(start == 0 && theArgs.length!=0)
     {
        for(let i=0 ; i<theArgs.length; i++)
        {
            //arr[i]=arr[i+1]
            array[i]=theArgs[i];
        }
        let abc = array.concat(arr)
        for(let i=0 ; i<abc.length; i++)
        arr[i] = abc[i]
        
    }

    else if(theArgs.length!=0 && start==1 && end ==1)
    {
        arr[start]=theArgs[0]
    }

    else if(theArgs.length==0 && end===undefined){
    let len = arr.length;
    let deleted2 =[]
    for(let i=start ; i<len; i++)
    {
       deleted2[len-i-1] = arr.pop();

        
    }

   return deleted2
    }

    else if(theArgs.length==0 && start==1 && end ==1)
    {
        let deleted2 = arr[start];
        return deleted2;
    }

    else if(end ==0)
    {
        let deleted2 = [];
        
        return deleted2;
    }

}


// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] */