export var tasks = [];

const Task = (title, description) => {
    let completed = false;
    return {title, description, completed};
}

export function addTask(title, description){
    tasks.push(Task(title, description));
}

tasks.push(Task('Brush Teeth', 'Scrub those teefers clean.'));
tasks.push(Task('Apply Deodorant', 'You\'re and adult.'));
tasks.push(Task('Morning Sudoku', 'Get that brain started.'));
tasks.push(Task('Work Out', 'Yea, I work out.'));
