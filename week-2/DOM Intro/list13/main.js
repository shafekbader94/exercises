const list = document.getElementById("list")

const addItem = function () {
    const addItem = document.createElement("li")
    addItem.innerHTML = "A new item!"
    list.appendChild(addItem)
}

