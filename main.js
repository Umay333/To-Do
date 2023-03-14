//Select DOM

const container = document.querySelector(".container")
const form = document.querySelector(".input-field")
const input = document.querySelector(".new-task-input")
const addButton = document.querySelector(".add-button")
const deleteButton = document.querySelector(".trash-button")
const list = document.querySelector(".task-list")
const date = document.getElementById("header-date")
const today = document.getElementById("header-today")


function getDate() {
    let year = new Date().getFullYear()

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[(new Date()).getMonth()];

    let day = new Date().getDate()
    date.textContent = `${day} ${month} ${year}`

    let weekday = new Date().getDay()
    const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
    today.textContent = days[weekday];
}

//Event listeners

addButton.addEventListener('click', addTask)
list.addEventListener("click", deleteTask)
list.addEventListener("click", checkTask)
input.addEventListener("keypress", click)

//Functions
function click(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addButton.click();
    }
}

// To add task in List
function addTask(event) {
    event.preventDefault()

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-div")

    // Create checkbox  element and set its type and  class
    const checkBox = document.createElement("input")
    checkBox.classList.add("check-box")
    checkBox.setAttribute("type", "checkbox")
    todoDiv.appendChild(checkBox)

    // Create li element and set its class
    const todoItem = document.createElement("li");

    // Put value of input in it
    todoItem.textContent = input.value
    todoItem.classList.add("todo-item")
    todoDiv.appendChild(todoItem)

    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-button")
    todoDiv.appendChild(trashButton)

    // append (insert) li tag in Ul
    list.appendChild(todoDiv)

    //Clear input value
    input.value = ""
}

// To delete task from List
function deleteTask(e) {
    const item = e.target;
    if (item.classList[0] === "trash-button") {
        const task = item.parentElement;
        task.remove()
    }
}

// To complete a task from List
function checkTask(e) {
    const item = e.target;
    if (item.classList[0] === "check-box") {
        const task = item.parentElement;
        task.classList.toggle("completed")

    }
}

