
/*
$.get('/randomWord')
.then(function (word) {
    let synonymsPromise = $.get(`/synonyms/${word}`)
    let sentimentPromise = $.get(`/sentiment/${word}`)
    Promise.all([synonymsPromise, sentimentPromise])
        .then(function (results) {
            console.log(results)
        })
}) */
/**** Exercise1 */
/*
$.get('/randomWord')
    .then(function (word) {
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        .then(function (results) {
            console.log(word)
            console.log(results)
        })
    })
*/
/**** Exercise2 */

$.get('/randomWord')
.then(function (word) {
    let abook = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    let agif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=1mDfvIP7nSAvXaVNH4pFhJul5oJM5hqz`)
    Promise.all([abook, agif])
        .then(function (results) {
            console.log(results)
             const bitlyURL = results[1].data[0].embed_url
           $("body").append(`
            <div>
               <iframe src="${bitlyURL}" frameborder="0"></iframe>
            </div>`)
        })
}) 