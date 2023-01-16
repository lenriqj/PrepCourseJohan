/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
    return string;
}
//console.log(devolverString("johan"));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   return x + y;
}
//console.log(suma(5,8));

function resta(x, y) {
   return x - y;
}
//console.log(resta(5,8));

function divide(x, y) {
   return x / y;
}
//console.log(divide(4,2));

function multiplica(x, y) {
   return x * y;
}
//console.log(multiplica(4,2));

function obtenerResto(x, y) {
   return x % y;
}
console.log(obtenerResto(9,5));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
