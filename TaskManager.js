export class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  getAllTasks() {
    return this.tasks;
  }

  getTasksWithStatus(status) {
    return this.tasks.filter((task) => task.estado === status);
  }

  addTask(task) {
    task.id = this.nextId;
    this.nextId++;

    this.tasks.push(task);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  updateTask(taskId, status) {
    const task = this.tasks.find((task) => task.id === taskId);

    if (task) {
      task.estado = status;
    }
  }

  assignTask(taskId, assignee) {
    const task = this.tasks.find((task) => task.id === taskId);

    if (task) {
      task.asignadoA = assignee;
    }
  }

  createTaskCard(tarea) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-tarea");

    const nombre = document.createElement("h3");
    nombre.textContent = tarea.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = "Descripción: " + tarea.descripcion;

    const asignado = document.createElement("p");
    asignado.textContent = "Asignado a: " + tarea.asignadoA;

    const fecha = document.createElement("p");
    fecha.textContent =
      "Fecha de entrega: " +
      new Date(tarea.fechaDeEntrega).toLocaleDateString();

    const estado = document.createElement("p");
    estado.textContent = "Estado: " + tarea.estado;

    tarjeta.append(nombre, descripcion, asignado, fecha, estado);

    return tarjeta;
  }
}
