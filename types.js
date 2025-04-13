"use strict";
//Tipos primitivos
//Boolean
let estudiasteJS = true;
if (estudiasteJS) {
    console.log("Puedes pasar al curso de TypeScript");
}
else {
    console.log("No puedes pasar al curso de TypeScript");
}
//Number
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = 'Me emocioné al verlo jugar';
function jugar(equipo, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo += messi;
        motivo = 'por que juega Messi';
    }
    if (equipo > equipo2) {
        console.log(`Gana Inter Miami ${motivo}`);
    }
    if (equipo < equipo2) {
        console.log("Gana FC Dallas");
    }
    if (equipo == equipo2) {
        console.log("Empate");
    }
}
jugar(interMiami, fcDallas, juegaMessi);
//También se puede asignar varios tipos de dato
let equip = 11;
equip = '11'; //Aqui asignamos un string
let programador2 = {
    nombre: 'Diego',
    tecnologias: ['JavaScript', 'TypeScript', 'React'],
    tomaMate: true
};
let programador3 = {
    nombre: 'Sergio',
    tecnologias: ['JavaScript', 'TypeScript', 'React'],
    tomaMate: null
};
let developer = {
    name: 'Diego',
    tecnologies: ['JavaScript', 'TypeScript', 'React'],
    takeMate: true
};
let developer2 = {
    name: 'Sergio',
    tecnologies: ['JavaScript', 'TypeScript', 'React'],
    takeMate: null
};
function sendCurriculum(developer) {
    console.log(`This curriculum is of ${developer.name}`);
}
sendCurriculum(developer2);
