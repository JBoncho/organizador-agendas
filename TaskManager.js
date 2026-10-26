export class TaskManager{
    constructor(){
        this.tasks = [];
        this.nextId = 1;
    }

    getAllTasks(){
        return this.tasks;
    }

    getTasksWithStatus(status){
        return this.tasks.filter(task => task.estado === status);
    }

    addTask(task){
        task.id = this.nextId;
        this.nextId++;

        this.tasks.push(task);
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    updateTask(taskId, status) {
    const task = this.tasks.find(task => task.id === taskId);

        if (task) {
            task.estado = status;
        }
    }

        assignTask(taskId, assignee) {
        const task = this.tasks.find(task => task.id === taskId);

        if (task) {
            task.asignadoA = assignee;
        }
    }

}