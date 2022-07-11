import './style.css';
const content = document.querySelector('#content');

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
        console.log(`heyo`);
    });
    submitButton.textContent = 'Add';
    modal.appendChild(submitButton);

    content.appendChild(modal);

    let showButton = document.createElement('button');
    showButton.addEventListener('click', () => modal.showModal());
    showButton.textContent = 'open';
    content.appendChild(showButton);
}

buildModal();