function validateTaskForm(){
    const nombreTarea= document.getElementById("nombre-tarea").value.trim();
    const description = document.getElementById("description").value.trim();
    const asignado = document.getElementById("asignado").value.trim();
    const fecha = document.getElementById("fecha-estimada").value.trim();
    const estado = document.getElementById("estado").value.trim();

    if(nombreTarea.length<=8){
        alert("La tarea debe tener más de 8 caracteres.");
        return false;
    }

    if (description.length<= 15) {
      alert("La descripción debe tener más de 15 caracteres.");
      return false;
    }

    if(asignado.length<=8){
        alert("El campo 'Asignado a' debe tener más de 8 caracteres.")
        return false;
    }

    if(fecha=== ""){
        alert("Debes seleccionar una fecha de entrega.");
        return false;
    }

    if(estado===""){
        alert("Debes seleccioar un estado.");
        return false;
    }

    return true;
}

const formulario = document.getElementById("formulario-tarea");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if(validateTaskForm()){
        alert("Fomulario válido. La tarea puede agregarse.");
    }
});



