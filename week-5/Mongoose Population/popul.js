
var mongoose = require("mongoose");
const Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/mongoose-population", { useNewUrlParser: true });

/*
const bookSchema = new Schema({ 
    title: String,
    author: String,
    reviews: [reviewSchema]
  })
  
  const reviewSchema = new Schema({ 
    book: bookSchema,
    reviewText: String,
    critic: criticSchema
  })
  
  const criticSchema = new Schema({ 
    name: String,
    reviews: [reviewSchema],
  })
*/

const bookSchema = new Schema({ 
  title: String,
  author: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}] //reference to an array of Review documents
})

const reviewSchema = new Schema({ 
  book: {type: Schema.Types.ObjectId, ref: 'Book'}, //reference to a Book document
  reviewText: String,
  critic: {type: Schema.Types.ObjectId, ref: 'Critic'} //reference to a Critic document
})

const criticSchema = new Schema({ 
  name: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}], //reference to an array of Review documents
})
  
  const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)

let b1 = new Book({
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  reviews: []
})

let c1 = new Critic({
  name: "William Jeffery",
  reviews: []
})

let r1 = new Review({
  book: b1,
  critic: c1,
  reviewText: "Excellent Book"
})
Book.findOne({})
    .populate("reviews")
    .exec(function (err, book) {
        console.log(book)
    })
/*
b1.reviews.push(r1)
c1.reviews.push(r1)

b1.save()
c1.save()
r1.save()


Book.find({}, function(err, books){
  console.log(books)
})
*/


/*
Review.find({}, function (err, reviews) {
  console.log(reviews)
})
*/

/*******************************************************************/
//////////////////////// Population /////////////////////////////////
/*
Book.findOne({})
    .populate("reviews")
    .exec(function (err, book) {
        console.log(book.reviews)
    })

*/
//////Nested Population///////
/*
Book.findOne({})
    .populate({
        path: 'reviews',
        populate: {
            path: 'critic'
        }
    })
    .exec(function (err, book) {
        console.log(book.reviews)
    })
    */

  /////////Multiple Population////////////
   /* Review.find({}, function (err, reviews) {     X
      console.log(reviews)
  })*/

  /*
  Review.find({})
    .populate('book critic')
    .exec(function (err, reviews) {
        console.log(reviews)
    })
*/


////////////Populating a Single Document//////////////////
/*
Critic.findOne({}, function(err, critic) {
  //now we have a single critic
  critic.populate('reviews', function() {
    console.log(critic.reviews)
  })
})
*/

