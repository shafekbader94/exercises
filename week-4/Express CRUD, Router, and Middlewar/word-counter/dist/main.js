let data = "qwe"
let sentence = "asd rty qwe"

const fetch = function () {
    $.get(`/word/${data}`, function (response) {
    //  render(response);
    console.log(response)
    });
  };

 
 $.post("/word", {name: data}, function (response) {

    fetch()
    console.log("POST complete");
  });


  $.post('/words', {name: sentence}, function (response) {

    fetch()
    console.log("POST complete2");
  });



  $.ajax({
    url: `/words/${data}`,
    method: "DELETE",
    success: function () { }
})