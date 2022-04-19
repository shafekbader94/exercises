const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]


const render = function () {
    for (let post of posts) {
        let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
        $("#timeline").append(postBox)


    }
}



$("button").on("click", function () {
    posts.push({
        name: $("#my-input1").val(),
        text: $("#my-input2").val()
    })
    $("#timeline").empty()
    render()
    $("#my-input1").val("")
    $("#my-input2").val("")
})