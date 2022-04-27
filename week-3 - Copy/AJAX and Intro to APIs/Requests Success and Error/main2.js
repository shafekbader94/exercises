$.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: function(data) {
      console.log(data);
    }
  })



  /***************************************************************************** */

  const useData = function(data){
    console.log(data);
  }

  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: useData
    
  })


  
  /**************with error par************************************************ */
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: function (data) {
        console.log(data);
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
}); 


  /****************with click*************************************** */

  const fetch = function(){
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
  }