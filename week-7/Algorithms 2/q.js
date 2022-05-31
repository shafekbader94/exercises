/*function appearsOddTimes(numbers){

    let counter = 0
        for(let i = 0 ; i < numbers.length ; i++){ //1
              for(let j = 0; j < numbers.length ; j++){ //1
                  if(numbers[i] === numbers[j])
                    counter++  //3
             }
             if(counter%2 !== 0)
                return numbers[i]
            else
                counter = 0
    
        }
    
        return "no odd appearing"
    }

*/
function appearsOddTimes(numbers){

    let oddObjNumber = {}
    let counter = 0
        for(let i = 0 ; i < numbers.length ; i++){ 

            if(oddObjNumber[numbers[i]] === undefined)
                 oddObjNumber[numbers[i]] = 1
             else
                oddObjNumber[numbers[i]] += 1
        }
     

        for(let i = 0 ; i < numbers.length ; i++){
           if(oddObjNumber[numbers[i]]%2 !==0)
               return numbers[i]

        }
     
    
        return "no odd appearing"
    }


console.log(appearsOddTimes([1,1,1,2,2,2,2]))