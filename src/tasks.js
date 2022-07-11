export var tasks = [];

const Task = (title) => {
    return {title};
}

export function addTask(title){
    tasks.push(Task(title));
}
