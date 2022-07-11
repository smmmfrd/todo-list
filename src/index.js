import './style.css';
const content = document.querySelector('#content');

var tasks = [];

const Task = (title) => {

    const buildCard = parentElement => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `${title}`;
        parentElement.appendChild(card);
    }
    return {title, buildCard};
}


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
    inputs.appendChild(nameInput);

    modal.appendChild(inputs);

    let submitButton = document.createElement('button');
    submitButton.addEventListener('click', () =>{
        tasks.push(Task(nameInput.value));
        displayTasks();
        modal.close();
    });
    submitButton.textContent = 'Add';
    modal.appendChild(submitButton);

    content.appendChild(modal);

    let showButton = document.createElement('button');
    showButton.addEventListener('click', () => modal.showModal());
    showButton.textContent = 'open';
    content.appendChild(showButton);
}

function displayTasks(){
    var taskDisplay = document.querySelector('#task-display');
    if(taskDisplay === null){
        taskDisplay = document.createElement('div');
        taskDisplay.id = 'task-display';
    }
    while(taskDisplay.firstChild){
        taskDisplay.removeChild(taskDisplay.firstChild);
    }

    tasks.forEach((task) => {task.buildCard(taskDisplay)});

    content.appendChild(taskDisplay);
}

buildModal();

tasks.push(Task('brush teeth'));

displayTasks();