


const findDuplicates = function (arr) {
    let ageObj ={}
    
    for (let i = 0; i < arr.length; i++){
            if(ageObj[arr[i]]== undefined)
                 ageObj[arr[i]] = arr[i]
            else
            console.log(`${arr[i]} has a duplicate`)
    }
  

} 

const arr = [1,2,3,4,5,5]
findDuplicates(arr)