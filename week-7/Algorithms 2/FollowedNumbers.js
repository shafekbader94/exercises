function followedNumbers(numbers){
    const arraySet = new Set(numbers)
    const newArraySet = new Set()

    for(let num of numbers){
        if(arraySet.has(num + 1) || arraySet.has(num - 1))
            newArraySet.add(num)
    }

    return Array.from(newArraySet)
}


console.log(followedNumbers([4,1,3]))