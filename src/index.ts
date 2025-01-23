let valor1 : number = 5;
let valor2 : number = 10;

function sumar(x : number, y : number) : number{
    return x + y;
}

console.log(sumar(valor1, valor2));

// Tipos de datos en TypeScript  (number, string, boolean, any)
let v1 : number = 0;
let v2 : number;
let v3 = 0;

let cad1 : string = "";
let cad2 : string;
let cad3 = "";

let bandera1 : boolean = true;
let bandera2 : boolean;
let bandera3 = true;

let cualquier;
cualquier = 0;
cualquier = "Hola";
cualquier = false;
// Union de tipos de datos
let telefono : string | number;
telefono = 8135745303;
telefono = "8135745303";