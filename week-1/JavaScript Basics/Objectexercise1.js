let p1 = {
    name: "Jill",
    age: "45",
    city: "New York"
  }

  let p2 = {
    name: "Robert",
    age: 50,
    city: "London"
  }

  if (p1.age == p2.age && p1.city === p2.city)
  {
      console.log("Jill wanted to date Robert")
  }

  else if(p1.city !== p2.city)
  {
    console.log("Jill wanted to date Robert, but couldn’t")
  }

