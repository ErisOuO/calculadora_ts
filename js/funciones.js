"use strict";
// Funciones en TypeScript
function resta(v1, v2) {
    return v1 - v2;
}
const division = (v1, v2) => {
    if (v2 == 0)
        return "Error matemático";
    else
        return v1 / v2;
};
function suma(v1, v2) {
    return v1 + v2;
}
function multiplicar(v1, v2) {
    return v1 * v2;
}
function calcular() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operacion = document.getElementById("opcion");
    const resultado = document.getElementById("res");
    const val1 = parseFloat(num1.value);
    const val2 = parseFloat(num2.value);
    const op = operacion.value;
    let res;
    switch (op) {
        case "suma":
            res = suma(val1, val2);
            break;
        case "resta":
            res = resta(val1, val2);
            break;
        case "multiplicacion":
            res = multiplicar(val1, val2);
            break;
        case "division":
            res = division(val1, val2);
            break;
        default:
            res = "Operación no válida.";
    }
    resultado.value = res.toString();
}
document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.getElementById("calcular");
    calcularButton.addEventListener("click", calcular);
});
/*
function ejemplo(nombre : string = "Desconocido") : string {
    return "Hola " + nombre;
}

console.log("El resultado es: " + resta(52,35));
console.log("El resultado es: " + division(25, 3));
console.log(ejemplo());
*/
