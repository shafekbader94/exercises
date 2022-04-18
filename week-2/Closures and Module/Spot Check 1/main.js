const Family = function(){
  const members = []

  const birth = function(name){
    members.push(name)
    console.log(members) 
  }
  return birth
}

const giveBirth = Family()
giveBirth("person1")
giveBirth("person2")
giveBirth("person3")

