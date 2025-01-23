"use strict";
// Manejo de arreglos en TypeScript 
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
dias.push("Domingo");
let calificaciones = [10, 9, 8, 7, 6];
calificaciones.pop();
console.log(dias);
console.log(calificaciones);
//Tuplas
let alumno;
alumno = ["20230081", "Luis Alberto", 11, true];
alumno = [20230007, "Erick Eduardo", 11, false];
console.log(alumno);
//Enumerados
var semana;
(function (semana) {
    semana[semana["Lunes"] = 0] = "Lunes";
    semana[semana["Martes"] = 1] = "Martes";
    semana[semana["Miercoles"] = 2] = "Miercoles";
    semana[semana["Jueves"] = 3] = "Jueves";
    semana[semana["Viernes"] = 4] = "Viernes";
    semana[semana["Sabado"] = 5] = "Sabado";
    semana[semana["Domingo"] = 6] = "Domingo";
})(semana || (semana = {}));
console.log(semana);
