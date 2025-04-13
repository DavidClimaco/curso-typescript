let programador = {
    nombre: 'Diego',
    tecnologias: ['JavaScript', 'TypeScript', 'React'],
    tomaMate: true
};

//Al intentar sobreescribir la variable, el compilador nos arroja un error
// Porque ya está definidio el tipo de dato de los campos
programador = {
    nombre: 'Diego',
    tecnologias: ['JavaScript', 'TypeScript', 'React'],
    //tomaMate: 'si', //Error
    tomaMate: false
}

console.log(programador);