function duplicateAnArray(arr){
    let arrDouble = arr.slice()
 for(let i = arr.length ; i < arr.length*2 ; i++){
	
	arrDouble[i]= arr[i-arr.length]
}

return arrDouble
}