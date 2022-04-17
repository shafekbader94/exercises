const playingField = document.getElementById("playing-field");

const down = document.getElementById("down");


const moveRight = function () {
  const block = document.getElementById("block");
  let left = parseInt(block.style.left) || 0;
  left += 15;
  block.style.left = left + "px";
};

const moveLeft = function () {
  const block = document.getElementById("block");
  let left = parseInt(block.style.left) || 0;
  left -= 15;
  block.style.left = left + "px";
};

const moveDown = function () {
  const block = document.getElementById("block");
  let Down = parseInt(block.style.top) || 0;
  Down += 15;
  block.style.top = Down + "px";
};

const moveUp = function () {
  const block = document.getElementById("block");
  let Top = parseInt(block.style.top) || 0;
  Top -= 15;
  block.style.top = Top + "px";
};


