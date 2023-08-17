type Task = {
    id: string,
    title: string,
    description?: string,
    subtasks?: SubTask[],
}

type SubTask = {
    text: string,
    id: string,
    finished: boolean,
}

export { Task, SubTask };
