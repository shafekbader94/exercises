

$.get('/randomWord')
.then(function (word) {
    let synonymsPromise = $.get(`/synonyms/${word}`)
    let sentimentPromise = $.get(`/sentiment/${word}`)
    Promise.all([synonymsPromise, sentimentPromise])
        .then(function (results) {
            console.log(results)
        })
}) 
  //  OR
  const printResults = function (word, synonyms, sentiment) {
    console.log(`
        The word ${word} has a 
        ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
        its synonyms are: ${synonyms}`
    )
}

$.get('/randomWord')
    .then(function (word) {
        let synonymsPromise = $.get(`/synonyms/${word}`)
        let sentimentPromise = $.get(`/sentiment/${word}`)
        Promise.all([synonymsPromise, sentimentPromise])
            .then(function (results) {
                printResults(word, results[0], results[1])
            })
    }) 

  /******************************************** */

/*let p = $.get("/randomWord"); //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
p.then(function (word) {
  console.log(word);
});


$.get('/sentiment/Ploy')
    .then(function (response) {
        console.log(response)
    })
************************************************/ 

    $.get('/randomWord')
    .then(function (word) {
        return $.get(`/synonyms/${word}`)
    })
    .then(function (synonyms) {
        console.log(synonyms)
    }) 

/*error catch
$.get('/randomWord')
    .then(function (word) {
        return $.get(`/synonyms/${word}`)
    })
    .catch(function (error) { console.log(error) })
    .then(function (synonyms) {
        console.log(synonyms)
    })
    .catch(function (error) { console.log(error) }) 
*/
/***************************************************************** */

/*
$.get('/randomWord', function (word) {
    $.get(`/synonyms/${word}`, function (synonyms) {
        $.get(`/sentiment/${word}`, function (sentiment) {
            console.log(`
            The word ${word} has a 
            ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
            its synonyms are: ${synonyms}`)
        })
    })
}) 
/******************************************************************************* */
/*
$.ajax({
    method: "GET",
    url: "/randomWord",
    success: function (word) {
        $.ajax({
            method: "GET",
            url: `/synonyms/${word}`,
            success: function (synonyms) {
                $.ajax({
                    method: "GET",
                    url: `sentiment/${word}`,
                    success: function (sentiment) {
                        console.log(`
                        The word ${word} has a 
                        ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
                        its synonyms are: ${synonyms}`)
                    },
                    error: function (err) {
                        console.log(err)
                    }
                })
            },
            error: function (err) {
                console.log(err)
            }
        })
    },
    error: function (err) {
        console.log(err)
    }
})
*/

/******************************************************************************* */
