

  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cat&api_key=A5qW392HPlYtgP0lC982ahhFKIUSQEgo");
  xhr.done(function(data) { 
      console.log("success got data", data); 
      //const imgData = data.data[0].url
      const bitlyURL = data.data[0].embed_url
      $("body").append(`
      <div>
         <iframe src="${bitlyURL}" frameborder="0"></iframe>
      </div>
      `)
    });