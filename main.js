const ulEl = document.getElementById('ul-el')
const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('button-el')
const deleteBtn = document.getElementById('delete-btn')
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"))
let myTasks = []
let date = document.querySelector('.date')
date.textContent = Date().substring(0, Date().length - 41)
let clearBtn = document.getElementsByClassName('clear')


if (tasksFromLocalStorage) {
    myTasks = tasksFromLocalStorage
    addTask(myTasks)
}

function addTask(tasks) {
    let listItems = ''
    for (let i = 0; i < tasks.length; i++) {
        listItems += `<li> > ${tasks[i]}<button class="clear">x</button></li>`;
    }
    ulEl.innerHTML = listItems
}



buttonEl.addEventListener('click', () => {
   if (inputEl.value) {
         myTasks.push(inputEl.value)
        inputEl.value = '';
        localStorage.setItem("myTasks", JSON.stringify(myTasks) )
        addTask(myTasks)
    }    

})

deleteBtn.addEventListener('click', () => {
    localStorage.clear()
    myTasks = []
    addTask(myTasks)
})