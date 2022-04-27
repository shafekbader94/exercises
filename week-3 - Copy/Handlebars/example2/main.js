
var items = [
    { item: "cheese", price: 15 },
    { item: "arak", price: 68 },
    { item: "hummus", price: 15 },
    { item: "pita", price: 5 }
  ]


var source = $('#store-template').html();
var template = Handlebars.compile(source);


for(let item of items)
{
    let newHTML = template(item);
    $('.items').append(newHTML);

}

  
  // Write a for loop here that loops through
  // the items array, creates a template for each
  // item, and appends it to the items div.