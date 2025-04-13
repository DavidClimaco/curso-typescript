class Pelicula {
    //Se agrega el ? para que no sea obligatorio inicializar
    nombre?: string 
    protagonistas?: string[]
    actores?: string[]

    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre = nombre
        this.protagonistas = protagonistas
        this.actores = actores
    }

    proyectarEnCine(): void{
        console.log(`"${this.nombre}" está siendo proyectada`)
    }

}

const pelicula1 = 
    new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling'])

const pelicula2 =
    new Pelicula('El padrino', ['Don Vito', 'Scarface'], ['Marlon Brando', 'Al Pacino'])   
pelicula1.proyectarEnCine()
pelicula2.proyectarEnCine()


//Encapsulamiento y genéricos
//Genericos sirven que la clase pueda recibir cualquier dato que 
// cumpla con la instancia de la clase
class Sorteo<T>{
    private ticket?: T

    constructor(private nombre: string){

    }

    setTicket(ticket: T): void{
        this.ticket = ticket
    }

    getTicket(): T|undefined{
        return this.ticket
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}

console.log("Encapsulamiento y genéricos")
let sorteo = new Sorteo<string>('David')
sorteo.setTicket('S7')
console.log(sorteo.sortear())