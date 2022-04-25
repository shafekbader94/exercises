let posts = [
  {
      id: 0, text: "I'm not here",
      comments: [{ id: 0, text: "support that" }]
  },
  {
      id: 1, text: "Find me",
      comments: [
          { id: 0, text: "here I am" },
          { id: 1, text: "rock you like a hurricane" },
          { id: 2, text: "dum dum" }]
  },
  {
      id: 2, text: "Where's waldo anyway",
      comments: [
          { id: 0, text: "who's waldo" },
          { id: 1, text: "he's called Effi" }]
  },
  {
      id: 3, text: "Poof",
      comments: [{ id: 0, text: "like magic" }]
  }
]

/***************************** */
const findById = function (id) {
  for (let post of posts) {
      if (post.id == id) {
          return post
      }
  }
}

/******************************* */

const findById = id => posts.find(p => p.id === id)
console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}
