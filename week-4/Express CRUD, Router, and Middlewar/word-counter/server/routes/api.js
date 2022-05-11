const express = require("express");
const router = express.Router();

let wordCounter = {a:3,b:6}
/*
let newWordCounter = {};
newWordCounter["count"] = wordCounter.b;*/

router.get("/sanity", function (req, res) {
  res.send("Server up and running");
});

router.get("/word/:word", function (req, res) {
  let word = req.params.word;

  if (wordCounter[word] != undefined)
    res.send({count: wordCounter[word]})//newWordCounter["count"] = wordCounter[word]
  else 
  res.send({count: 0})        //newWordCounter["count"] = 0;

});


router.post('/word', function (req, res) {
   // console.log("Someone's trying to make a post request")
    console.log(req.body.name)
    let wordAdd = req.body
    //let wordAddString= JSON.stringify(wordAdd)
    if (wordCounter[wordAdd.name] == undefined)
         wordCounter[wordAdd.name] = 1
     else
         wordCounter[wordAdd.name] = wordCounter[wordAdd.name]+1
       //  wordCounter[wordAdd] = "1"
    //   wordCounter[wordAdd.name] = 2
         //console.log(wordCounter)
        // console.log({text:"added "+wordAdd.name, currentCount:  wordCounter[wordAdd.name]})
         res.send({text:"Added "+ wordAdd.name, currentCount:  wordCounter[wordAdd.name]})//res.send({text: wordAdd, currentCount: wordCounter[wordAdd]})
})


router.post('/words', function (req, res) {
   // console.log("Someone's trying to make a post request")
   // console.log(req.body)
    let wordAdd = req.body.sentence
   let arrWord= wordAdd.name.split(' ')

  // console.log(arrWord)
    //let wordAddString= JSON.stringify(wordAdd)
let numNewWords = 0
let numOldWords = 0
for(let i = 0 ; i < arrWord.length ; i++ )
{
    if (wordCounter[arrWord[i]] == undefined){
         wordCounter[arrWord[i]] = 1
         numNewWords++
    }
     else{
         wordCounter[arrWord[i]] = wordCounter[arrWord[i]]+1
         numOldWords++
     }
       //  wordCounter[wordAdd] = "1"
    //   wordCounter[wordAdd.name] = 2
        // console.log(wordCounter)
        // console.log({text:"added "+wordAdd.name, currentCount:  wordCounter[wordAdd.name]})
     
}
res.send({text: "added " + numNewWords + ", " + numOldWords + "alreadt exsited", currentCount:  -1})

})



router.delete('/words/:word', function (req, res) {
    let deltWord = req.params.word

    if (wordCounter[deltWord] !== undefined){
        delete wordCounter[deltWord]
    }
console.log(wordCounter)
    res.end()
})


module.exports = router;
