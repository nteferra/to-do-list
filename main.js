const ulEl = document.getElementById('ul-el')
const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('button-el')
const clearBtn = document.getElementById('clear-btn')
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"))
let myTasks = []
let date = document.querySelector('.date')
date.textContent = Date().substring(0, Date().length - 41)


if (tasksFromLocalStorage) {
    myTasks = tasksFromLocalStorage
    addTask(myTasks)
}

function addTask(tasks) {
    let listItems = ''
    for (let i = 0; i < tasks.length; i++) {
        listItems += `<li> > ${tasks[i]}<button class="del" onclick="deleteTask(${i})">X</button></li>`;
    }
    ulEl.innerHTML = listItems
}

function deleteTask(index) {
    let taskEl = document.querySelectorAll('li')[index];
    taskEl.remove();

    myTasks.splice(index, 1);

    localStorage.setItem('myTasks', JSON.stringify(myTasks));

}



buttonEl.addEventListener('click', () => {
   if (inputEl.value) {
         myTasks.push(inputEl.value)
        inputEl.value = '';
        localStorage.setItem("myTasks", JSON.stringify(myTasks) )
        addTask(myTasks)
    }    

})

clearBtn.addEventListener('click', () => {
    localStorage.clear()
    myTasks = []
    addTask(myTasks)
})