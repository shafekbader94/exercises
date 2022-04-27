let wisdom = [];
let id = 0;

window.onload = checkUser;
function checkUser() {
  let data = JSON.parse(localStorage.wisdom || "[]");
  console.log(data);
  wisdom = data;
  wisdom.forEach((element) => {
    let adding = `<div data-id="${element.id}"> <span > ${element.text} </span> <span class="delX"> (X) </span></div>`;
    $(".divClass").append(adding);
  });
}

const myInput = function () {
  wisdom.push({ id: id, text: $("#my-input").val() });
  let adding = `<div data-id="${id}"> <span > ${$(
    "#my-input"
  ).val()} </span> <span class="delX"> (X) </span></div>`;
  $(".divClass").append(adding);
  $("#my-input").val("");
  if (wisdom.length % 2 == 0) {
    localStorage.wisdom = JSON.stringify(wisdom);
  }
  id++;
};

$(".buttonAdd").click(myInput);

const myInputDelet = function () {
  localStorage.clear();
};

$(".buttonDel").click(myInputDelet);

$(".divClass").on("click", ".delX", function () {
  const deletId = $(this).closest("div").data().id;
  console.log(deletId);

  for (let i = 0; i < wisdom.length; i++) {
    if (wisdom[i].id === deletId) {
      console.log(deletId);
      $(this).closest("div").remove();
      wisdom.splice(i, 1);
      console.log(wisdom);

      localStorage.wisdom = JSON.stringify(wisdom);
    }
  }
});
