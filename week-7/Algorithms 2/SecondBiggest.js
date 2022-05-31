function secondBiggest(numbers){

    let max = -Infinity
    let secMax = max

    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] > max)
        {
            secMax = max
            max = numbers[i]
        }
    }

    return secMax

}

console.log(secondBiggest([12,23,3,7,23]))