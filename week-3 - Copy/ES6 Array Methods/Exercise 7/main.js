let users= mockUsers.slice()


const namedFunction = function(user){

    console.log(`${user.name}`+ " lives in " + `${user.address.city}` + " and own the cpmapany " + `${user.company.name}` )
}


users.forEach(namedFunction)


