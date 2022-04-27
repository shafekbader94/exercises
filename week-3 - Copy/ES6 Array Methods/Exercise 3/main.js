let users= mockUsers.slice()

const findFisrtZipCode5 = function(zipCode){
    return parseInt(zipCode.address.zipcode.charAt(0) ) ==  5
}


const findingID = users.filter(findFisrtZipCode5).map(theID => parseInt(`${theID.id}`))

console.log(findingID)
