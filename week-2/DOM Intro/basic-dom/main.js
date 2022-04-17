const playingField = document.getElementById("playing-field");
console.log(playingField);

const down = document.getElementById("down");
console.log(down);

console.log(down.innerHTML);

down.innerHTML = "Down";
console.log(playingField.innerHTML);

//playingField.style.backgroundColor = "blue"

const ballColor = document.getElementById("block");
ballColor.style.backgroundColor = "yellow";

const moveRight = function () {
  const block = document.getElementById("block");
  let left = parseInt(block.style.left) || 0;
  left += 15;
  block.style.left = left + "px";
};

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);
header.setAttribute("class", "my-header")

const subHeader = document.createElement("h2")
subHeader.innerHTML = "This is the Sub Header"
subHeader.setAttribute("class" , "sub-header")
document.body.appendChild(subHeader)
