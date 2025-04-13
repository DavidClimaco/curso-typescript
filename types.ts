//Tipos primitivos
//Boolean
let estudiasteJS: boolean = true;

if(estudiasteJS){
    console.log("Puedes pasar al curso de TypeScript");
}else{
    console.log("No puedes pasar al curso de TypeScript");
}

//Number
let interMiami: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

let palabras: string = 'Me emocioné al verlo jugar';

function jugar(equipo: number, equipo2: number, juegaMessi: boolean): void{
    let motivo: string = '';
    if(juegaMessi){
        equipo += messi;
        motivo = 'por que juega Messi';
    }
    if(equipo > equipo2){
        console.log(`Gana Inter Miami ${motivo}`);
    }
    if(equipo < equipo2){
        console.log("Gana FC Dallas");
    }
    if(equipo == equipo2){
        console.log("Empate");
    }
}

jugar(interMiami, fcDallas, juegaMessi);

//También se puede asignar varios tipos de dato
let equip: number | string = 11;
equip = '11'; //Aqui asignamos un string


//Type personalizado
type Programador = {
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null//Campo opcional, no es necesario que se asigne al crear el objeto
}

let programador2: Programador = {
    nombre: 'Diego',
    tecnologias: ['JavaScript', 'TypeScript', 'React'],
    tomaMate: true
}

let programador3: Programador = {
    nombre: 'Sergio',
    tecnologias: ['JavaScript', 'TypeScript', 'React'],
    tomaMate: null
}


//Interfaces
interface Developer {
    name: string,
    tecnologies: string[],
    takeMate?: boolean | null
}

let developer: Developer = {
    name: 'Diego',
    tecnologies: ['JavaScript', 'TypeScript', 'React'],
    takeMate: true 
}

let developer2: Developer = {
    name: 'Sergio',
    tecnologies: ['JavaScript', 'TypeScript', 'React'],
    takeMate: null 
}

function sendCurriculum(developer: Developer){
    console.log(`This curriculum is of ${developer.name}`);
}

sendCurriculum(developer2);