const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const renderFirst = function(){
  const source = $('#animals-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template({ animal: animals });
  $('body').append(newHTML);  
}

const renderSecond = function(){
  const source = $('#languages-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template({ language: languages });
  $('body').append(newHTML);  
}


renderFirst()
renderSecond()