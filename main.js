const ulEl = document.getElementById('ul-el')
const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('button-el')
let myTasks = []

function addTask(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        ulEl.innerHTML += `<li>${tasks[i]}</li>`
    }
}