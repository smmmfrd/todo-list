import { tasks, addTask, saveCurrentTasks } from "./tasks";

var taskDisplayModal;

function modalInput(label){
    let input = document.createElement('div');

    let inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', label);
    inputLabel.innerHTML = `${label.toUpperCase()}: `;
    input.appendChild(inputLabel);

    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = label;
    inputField.classList.add('input');
    input.appendChild(inputField);

    return input;
}

function buildInputModal(){
    let modal = document.createElement('dialog');
    modal.classList.add('modal');

    let closeButton = document.createElement('button');
    closeButton.addEventListener('click', () => modal.close());
    closeButton.textContent = 'close';
    modal.appendChild(closeButton);

    // INPUTS
    let inputs = document.createElement('p');

    let nameInput = modalInput('name');
    let descriptionInput = modalInput('description');
    inputs.appendChild(nameInput);
    inputs.appendChild(descriptionInput);

    modal.appendChild(inputs);

    let submitButton = document.createElement('button');
    submitButton.addEventListener('click', () =>{
        addTask(nameInput.querySelector('.input').value, descriptionInput.querySelector('.input').value);
        refreshTaskHolder();
        modal.close();
    });
    submitButton.textContent = 'Add';
    modal.appendChild(submitButton);

    return modal;
}

function DisplayModal(){

    let currentTask;

    let modal = document.createElement('dialog');
    modal.classList.add('modal');
    modal.id = 'task-modal';

    let closeButton = document.createElement('button');
    closeButton.addEventListener('click', () => modal.close());
    closeButton.textContent = 'close';
    modal.appendChild(closeButton);

    let titleDisplay = document.createElement('h1');
    modal.appendChild(titleDisplay);

    let descDisplay = document.createElement('p');
    modal.appendChild(descDisplay);

    let completeButton = document.createElement('button');
    completeButton.addEventListener('click', () =>{
        currentTask.completed = !currentTask.completed;
        display(currentTask);
        refreshTaskHolder();
    })
    modal.appendChild(completeButton);

    const display = (task) => {
        if(!modal.open){
            modal.showModal();
        }
        titleDisplay.textContent = `${task.title}`;
        descDisplay.textContent = `${task.description}`;

        currentTask = task;
        completeButton.textContent = task.completed ? 'MARK UNCOMPLETED' : 'MARK COMPLETED';
    }
    return {modal, display};
}

function buildTaskCard(task, parentElement){
    let card = document.createElement('div');

    card.classList.add('card');
    card.textContent = `${task.title}`;
    card.addEventListener('click', () => {
        taskDisplayModal.display(task);
    });

    let completedDisplay = document.createElement('input');
    completedDisplay.type = 'checkbox';
    completedDisplay.checked = task.completed;
    completedDisplay.onclick = (e) => {
        task.completed = !task.completed;
        saveCurrentTasks();
        e.stopPropagation();        
    }
    card.appendChild(completedDisplay);

    parentElement.appendChild(card);
}

function refreshTaskHolder(){
    var taskDisplay = document.querySelector('#task-display');
    while(taskDisplay.firstChild){
        taskDisplay.removeChild(taskDisplay.firstChild);
    }

    tasks.forEach((task) => {buildTaskCard(task, taskDisplay)});

    saveCurrentTasks();
}

export function buildPage(){
    let nav = document.createElement('div');
    nav.id = 'nav';

    content.appendChild(nav);

    let inputModal = buildInputModal();
    content.appendChild(inputModal);

    // console.log(displayModal());
    taskDisplayModal = DisplayModal();
    content.appendChild(taskDisplayModal.modal);

    let projectContent = document.createElement('div');
    projectContent.id = 'project-content';

    let taskCreator = document.createElement('div');
    taskCreator.id = 'task-creator';
    
    let openInputModalButton = document.createElement('button');
    openInputModalButton.addEventListener('click', () => {
        // clear inputs
        [...inputModal.getElementsByClassName('input')].forEach(i => i.value = '');
        inputModal.showModal();
    });
    openInputModalButton.textContent = 'Add Task';
    taskCreator.appendChild(openInputModalButton);
    projectContent.appendChild(taskCreator);

    let taskDisplay = document.createElement('div');
    taskDisplay.id = 'task-display';
    projectContent.appendChild(taskDisplay);

    content.appendChild(projectContent);

    refreshTaskHolder();
}