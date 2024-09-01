let add = document.querySelector('#add');
let container = document.querySelector('#container');

// let listSection = document.querySelector('#list-section');
// let guide = document.querySelector('#guide');
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

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        add.click();
    }
});


let count = 0;