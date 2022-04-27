let users= mockUsers.slice()

const findSuite = users.filter( suiteFind => suiteFind.address.suite === "Apt. 950")
                .map( suiteFind => `${suiteFind.company.name}`)
  
console.log(findSuite) 

