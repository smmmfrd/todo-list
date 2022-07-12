import { tasks, currentProject, addProject, addTask, saveCurrentTasks, loadTasks } from "./tasks";

var taskDisplayModal;
var createProjectModal;

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
        refreshTaskHolder(true);
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

function refreshTaskHolder(save = false){
    var taskDisplay = document.querySelector('#task-display');
    while(taskDisplay.firstChild){
        taskDisplay.removeChild(taskDisplay.firstChild);
    }

    if(tasks.length > 0) tasks.forEach((task) => {buildTaskCard(task, taskDisplay)});

    if(save) saveCurrentTasks();
}

function ProjectModal(){
    let modal = document.createElement('dialog');
    modal.classList.add('modal');

    let closeButton = document.createElement('button');
    closeButton.addEventListener('click', () => modal.close());
    closeButton.textContent = 'close';
    modal.appendChild(closeButton);

    let projectName = document.createElement('input');
    projectName.type = 'text';
    modal.appendChild(projectName);

    let addButton = document.createElement('button');
    addButton.addEventListener('click', () =>{
        addProject(projectName.value);
        refreshProjectsList();
        modal.close();
    });
    addButton.textContent = 'Create Project';
    modal.appendChild(addButton);

    return modal;
}

function refreshProjectsList(){
    let holder = document.querySelector('#projects-list');
    while(holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }

    let projectNames = localStorage.getItem('projects').split(',');

    for(let i = 0; i < projectNames.length; i++){
        let div = document.createElement('div');
        div.textContent = projectNames[i].toUpperCase();
        div.classList.add('project-nav');

        div.addEventListener('click', () => {
            console.log(projectNames[i]);
            changeProjectTo(projectNames[i]);
        });

        holder.appendChild(div);
    }
}


function buildProjectNav(){

    let nav = document.createElement('div');
    nav.id = 'nav';

    let projectsList = document.createElement('div');
    projectsList.id = 'projects-list';
    nav.appendChild(projectsList);

    let createProjectButton = document.createElement('div');
    createProjectButton.textContent = '+ Create Project';
    createProjectButton.id = 'create-project';

    createProjectButton.addEventListener('click', () => {
        createProjectModal.showModal();
    });

    nav.appendChild(createProjectButton);

    return nav;
}

function changeProjectTo(project){
    document.getElementById('project-name').textContent = project.toUpperCase();
    loadTasks(project);
    refreshTaskHolder();
}

export function buildPage(){
    createProjectModal = ProjectModal();
    content.appendChild(createProjectModal);
    content.appendChild(buildProjectNav());

    taskDisplayModal = DisplayModal();
    content.appendChild(taskDisplayModal.modal);

    let projectContent = document.createElement('div');
    projectContent.id = 'project-content';

    let taskCreator = document.createElement('div');
    taskCreator.id = 'task-creator';

    let projectNameDiv = document.createElement('div');
    projectNameDiv.textContent = currentProject.toUpperCase();
    projectNameDiv.id = 'project-name'
    taskCreator.appendChild(projectNameDiv);

    let inputModal = buildInputModal();
    content.appendChild(inputModal);
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

    refreshProjectsList();
    refreshTaskHolder();
}