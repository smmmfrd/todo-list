import { tasks, addTask } from "./tasks";

function buildModal(){
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
    nameInput.classList.add('input');
    nameInput.value = '';
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

    return modal;
}

function buildTaskCard(task, parentElement){
    let card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `${task.title}`;
    parentElement.appendChild(card);
}

function displayTasks(){
    var taskDisplay = document.querySelector('#task-display');
    while(taskDisplay.firstChild){
        taskDisplay.removeChild(taskDisplay.firstChild);
    }

    tasks.forEach((task) => {buildTaskCard(task, taskDisplay)});
}

export function buildPage(){
    let nav = document.createElement('div');
    nav.id = 'nav';

    content.appendChild(nav);

    let modal = buildModal();
    content.appendChild(modal);

    let projectContent = document.createElement('div');
    projectContent.id = 'project-content';

    let taskCreator = document.createElement('div');
    taskCreator.id = 'task-creator';
    
    let openModalButton = document.createElement('button');
    openModalButton.addEventListener('click', () => {
        // clear inputs
        [...modal.getElementsByClassName('input')].forEach(i => i.value = '');
        modal.showModal();
    });
    openModalButton.textContent = 'Add Task';
    taskCreator.appendChild(openModalButton);
    projectContent.appendChild(taskCreator);

    let taskDisplay = document.createElement('div');
    taskDisplay.id = 'task-display';
    projectContent.appendChild(taskDisplay);

    content.appendChild(projectContent);

    displayTasks();
}