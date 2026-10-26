export class Tarea{
    constructor(id, nombre, descripcion, asignadoA, fechaDeEntrega, estado){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.asignadoA = asignadoA;
        this.fechaDeEntrega = new Date(fechaDeEntrega);
        this.estado = estado;
    }
}