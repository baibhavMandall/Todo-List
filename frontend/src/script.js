let add = document.querySelector('#add');
let todoList = document.querySelector('#todo-list');
let container = document.querySelector('#container');

// let listSection = document.querySelector('#list-section');
// let setting = document.querySelector('#settings');
// let feedback = document.querySelector('#feedback');

add.addEventListener('click', () => {
    let userInput = prompt('Enter task name')
    if (userInput) {
        let newTask = document.createElement('h1');
        newTask.id = 'list-name';
        newTask.textContent = userInput;

        let addList = document.createElement('div') 
        addList.appendChild(newTask);
        addList.id = 'todo-list';
        container.appendChild(addList);
    }
    else {
        alert('Task name cannot be empty!')
    }
})