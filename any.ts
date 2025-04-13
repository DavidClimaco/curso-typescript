//No se recomiena usar any, pero es una forma de decirle a TypeScript 
// que no se preocupe por el tipo de dato que se le pasa.
let disney: any;
disney = 'Star Wars y Marvel';
console.log(disney);

disney = 123;
console.log(disney);

disney = true;
console.log(disney);