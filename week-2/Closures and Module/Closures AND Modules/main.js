const UsersModule = function () {
  const _users = ['Aaron', 'Avi'];

  const addUser = function (user) {
      _users.push(user)
  }

  const listUsers = function () {
      for (let user of _users) {
          console.log(user)
      }
  }

  return {
      addUser: addUser,
      listUsers: listUsers
  }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()

usersModule.addUser('User1')
usersModule.addUser('User2')
usersModule.listUsers()

console.log(usersModule._users)