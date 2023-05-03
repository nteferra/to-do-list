const ulEl = document.getElementById('ul-el')
const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('button-el')
let myTasks = []

function addTask(tasks) {
    let listItems = ''
    for (let i = 0; i < tasks.length; i++) {
        listItems += `<li>${tasks[i]}</li>`
    }
    ulEl.innerHTML = listItems
}

buttonEl.addEventListener('click', () => {
    myTasks.push(inputEl.value)
    inputEl.value = '';
    addTask(myTasks)
    

})