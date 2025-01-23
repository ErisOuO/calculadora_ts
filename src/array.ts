// Manejo de arreglos en TypeScript 
let dias : string[] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
dias.push("Domingo");

let calificaciones : number[] = [10, 9, 8, 7, 6];
calificaciones.pop();

console.log(dias);
console.log(calificaciones);

//Tuplas
let alumno : [string | number, string, number, boolean];
alumno = ["20230081", "Luis Alberto", 11, true];
alumno = [20230007, "Erick Eduardo", 11, false];

console.log(alumno);

//Enumerados
enum semana{
    Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo
}

console.log(semana);