const checkExists = function(arrayNumber , number){

    for( let i = 0 ; i < arrayNumber.length ; i++)
    {
        if(arrayNumber[i] === number)
        {
            return true
        }
    }
    return false
    
}

let arraySend = [1,2,3,4,5]
let returnedValue = checkExists(arraySend ,9)
console.log(returnedValue)