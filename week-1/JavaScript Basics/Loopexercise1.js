const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []


for(let i=0 ; i< names.length ; i++)
{
    people.push ({
        name:names[i],
        age:ages[i]
    }) ;
}


for(let i=0 ; i< people.length ; i++)
{
    if(i !=people.length-1)
        console.log("{name:" + '"'+ people[i].name+'"' + ", age:" + people[i].age + "},")
    else
    console.log("{name:" + '"'+ people[i].name+'"' + ", age:" + people[i].age + "}")
}


let person = {
    name: "Mariah",
    occupation: "Gangster"
  }

  people.qwe="qweee"
  console.log(people.qwe)
