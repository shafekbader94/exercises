/*let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

localStorage.userStorage = JSON.stringify(userStorage)
let data = JSON.parse(localStorage.userStorage)

console.log(data.cart[data.cart.length - 1].count)
*/
/************ */
render = function(){
    localStorage.wisdomArr = JSON.stringify(wisdom)
   // JSON.parse( localStorage.wisdomArr)
  //let displayData = localStorage.getItem(data[0].text);
  // console.log(data)
  //console.log(displayData)
  let data = JSON.parse(localStorage.wisdomArr)
  console.log(data[0].text)
   // let adding2 = `<p >${data[0].text}  </p>`
  //  $(".divClass").append(adding2)
}

let wisdom = []

const myInput = function () {

    wisdom.push({text: $("#my-input").val()})
 //   let adding = `<p > ${$("#my-input").val()} </p>`
 //   $(".divClass").append(adding)
    $('#my-input').val("")

   // if(wisdom.length % 2 == 0)
   //{    

   //}
   render()
  }
  
  $("button").click(myInput)
  /*

  $(".divClass").on("click" ,"li", function(){
    $(this).remove()
  })*/