// Initialize the HTTP request to a server located at "someURL"
var xhr = new XMLHttpRequest();
xhr.open('get', '/someURL');

// Track the state changes of the request.
xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.var OK = 200; // status 200 is a successful return.if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
            console.log(xhr.responseText); // 'This is the returned text.'
        } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.

        }
    }
};

// Send the request to send-ajax-data.php
xhr.send(null);


/************* */

$.get("https://www.google.com", function(result){
    console.log(result)
})

/****************** */

let data = $.get("/some_api")

/*************** */
$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
    console.log(result)
})