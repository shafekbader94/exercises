const fetchData = function () {
    const input = $("#input").val()

    $.get(`priceCheck/${input}`, function (nameData) {
        $("body").append(`<div id="priceCheck">${nameData.price}</div>`)
    })

} 



const Buy = function () {
    const input = $("#input").val()

    $.get(`buy/${input}`, function (nameData) {
        $("body").append(`<div><p>Congratulations, you’ve just bought ${nameData.name} for ${nameData.price}</div>`)
    })

} 