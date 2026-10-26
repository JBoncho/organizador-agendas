import { Tarea } from "./Tareas.js";
import { TaskManager } from "./TaskManager.js";

const gestor = new TaskManager();

function validateTaskForm() {
  const nombreTarea = document.getElementById("nombre-tarea").value.trim();
  const description = document.getElementById("description").value.trim();
  const asignado = document.getElementById("asignado").value.trim();
  const fecha = document.getElementById("fecha-estimada").value.trim();
  const estado = document.getElementById("estado").value;

  if (nombreTarea.length <= 8) {
    alert("La tarea debe tener más de 8 caracteres.");
    return false;
  }

  if (description.length <= 15) {
    alert("La descripción debe tener más de 15 caracteres.");
    return false;
  }

  if (asignado.length <= 8) {
    alert("El campo 'Asignado a' debe tener más de 8 caracteres.");
    return false;
  }

  if (fecha === "") {
    alert("Debes seleccionar una fecha de entrega.");
    return false;
  }

  if (estado === "") {
    alert("Debes seleccionar un estado.");
    return false;
  }

  return true;
}

function mostrarTareas() {
  const listaTareas = document.getElementById("lista-tareas");

  listaTareas.replaceChildren();

  const tareas = gestor.getAllTasks();

  tareas.forEach(function (tarea) {
    const tarjeta = gestor.createTaskCard(tarea);

    listaTareas.appendChild(tarjeta);
  });
}

const formulario = document.getElementById("formulario-tarea");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateTaskForm()) {
    const nombre = document.getElementById("nombre-tarea").value.trim();
    const descripcion = document.getElementById("description").value.trim();
    const asignadoA = document.getElementById("asignado").value.trim();
    const fechaDeEntrega = document.getElementById("fecha-estimada").value;
    const estado = document.getElementById("estado").value;

    const tarea = new Tarea(
      null,
      nombre,
      descripcion,
      asignadoA,
      fechaDeEntrega,
      estado,
    );

    gestor.addTask(tarea);

    mostrarTareas();

    formulario.reset();

    alert("Tarea agregada correctamente.");
  }
});
