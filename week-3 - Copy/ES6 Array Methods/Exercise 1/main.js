let users= mockUsers.slice()

const newUser = users.map(user => { return { email: user.email, companyName: user.company.name } })
console.log(newUser)