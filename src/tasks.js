export var tasks = [];
const Task = (title, description) => {
    let completed = false;
    return {title, description, completed};
}

export function addTask(title, description){
    tasks.push(Task(title, description));
}
// localStorage.clear();
export var currentProject = 'daily';

export function addProject(projectName){
    let projects = localStorage.getItem('projects');
    projects += `,${projectName}`;
    localStorage.setItem('projects', projects);
}

if(localStorage.getItem('projects') === null){
    localStorage.setItem('projects', 'daily,weekly');
}
loadTasks(currentProject);

export function saveCurrentTasks(){
    console.log('saving');
    localStorage.setItem(currentProject, JSON.stringify(tasks));
}

export function loadTasks(projectName){
    currentProject = projectName;
    tasks = JSON.parse(localStorage.getItem(projectName));
    if(tasks === null) tasks = [];
    // if(localStorage.getItem(projectName) === null) {
    //     tasks = [];
    // } else {
        
    // }
}