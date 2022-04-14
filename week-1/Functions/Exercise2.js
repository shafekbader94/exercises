const oddNembers = function(arrayNumber){

    let sendArray = []
    let index = 0
    for( let i = 0 ; i < arrayNumber.length ; i++)
    {
        if(arrayNumber[i] % 2 != 0)
        {
            sendArray[index] = arrayNumber[i];
            index++
        }
    }

    return sendArray
}

let arraySend = [1,2,3,4,5]
let returnedValue = oddNembers(arraySend)
console.log(returnedValue)