const urllib = require('urllib')

/*$('.divClass').on('click', function () {
    $(".divClass").css("background-color", "#f39c12");
  })

*/
 

 

  
  /*  $.ajax({
        method: "GET",
        url: 'http://data.nba.net/10s/prod/v1/2016/players.json',
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
 */

/*
/******************************N B A******************************************************************** 
    urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
        console.log(response.toString())
    })
 */

    http://www.omdbapi.com/?t=a&y=1990&plot=full
    urllib.request('https://www.omdbapi.com/?apikey=ac59ee33&t=The+Lion+King&plot=full', function(err, response){
        let response2 = JSON.parse(response.toString())
        console.log(response2.Released)
    })

    
  