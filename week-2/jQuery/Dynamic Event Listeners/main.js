
/*
const addDiv = function() {
  $("body").append("<div class=box></div>")
  $(".box").on("click", function() {
    alert("hi")
  });
};

$("button").on("click", function() {
  addDiv()
});
*/

const addDiv = function() {
  $("body").append("<div class=box></div>");
};

$("button").on("click", function() {
  addDiv();
});

$("body").on("click", ".box", function() {
  alert("hi");
});