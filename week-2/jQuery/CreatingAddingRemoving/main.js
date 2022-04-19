const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)
$("body").append(elem)

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

const text = "Banana"
const item = $("<div class=fruit>" + text + "</div>")

console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

const text2 = "Banana"
const item2 = $(`<div class=fruit>${text2}</div>`)

console.log(item2) //the same