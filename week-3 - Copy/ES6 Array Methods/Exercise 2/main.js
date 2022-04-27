let users= mockUsers.slice()


/*
const findById = function(idNumber){
    return idNumber.id === 3 ||idNumber.id === 4 || idNumber.id === 7
}
*/
const findFisrtZipCode5 = function(zipCode){
    return zipCode.address.zipcode.charAt(0) ==  5
}


const findingID = users.filter(findFisrtZipCode5)

console.log(findingID)
