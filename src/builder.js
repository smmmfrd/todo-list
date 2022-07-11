import { tasks, addTask } from "./tasks";

export function buildModal(){
    let modal = document.createElement('dialog');
    modal.classList.add('modal');

    let closeButton = document.createElement('button');
    closeButton.addEventListener('click', () => modal.close());
    closeButton.textContent = 'close';
    modal.appendChild(closeButton);

    let inputs = document.createElement('p');

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.innerHTML = 'Name :';
    inputs.appendChild(nameLabel);
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    inputs.appendChild(nameInput);

    modal.appendChild(inputs);

    let submitButton = document.createElement('button');
    submitButton.addEventListener('click', () =>{
        addTask(nameInput.value);
        displayTasks();
        modal.close();
    });
    submitButton.textContent = 'Add';
    modal.appendChild(submitButton);

    content.appendChild(modal);

    let showButton = document.createElement('button');
    showButton.addEventListener('click', () => modal.showModal());
    showButton.textContent = 'Add Task';
    content.appendChild(showButton);
}

function buildTaskCard(task, parentElement){
    let card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `${task.title}`;
    parentElement.appendChild(card);
}

export function displayTasks(){
    var taskDisplay = document.querySelector('#task-display');
    if(taskDisplay === null){
        taskDisplay = document.createElement('div');
        taskDisplay.id = 'task-display';
    }
    while(taskDisplay.firstChild){
        taskDisplay.removeChild(taskDisplay.firstChild);
    }

    tasks.forEach((task) => {buildTaskCard(task, taskDisplay)});

    content.appendChild(taskDisplay);
}