"use strict";
class Pelicula {
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectarEnCine() {
        console.log(`"${this.nombre}" está siendo proyectada`);
    }
}
const pelicula1 = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
const pelicula2 = new Pelicula('El padrino', ['Don Vito', 'Scarface'], ['Marlon Brando', 'Al Pacino']);
pelicula1.proyectarEnCine();
pelicula2.proyectarEnCine();
//Encapsulamiento y genéricos
//Genericos sirven que la clase pueda recibir cualquier dato que 
// cumpla con la instancia de la clase
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
console.log("Encapsulamiento y genéricos");
let sorteo = new Sorteo('David');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
