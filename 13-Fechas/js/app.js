//Date
let now = new Date();
let date = new Date('1970-12-31 23:59:59');

console.log(`Fecha Actual ${now}`);
console.log(`Año ${now.getFullYear()}`);
console.log(`Mes ${now.getMonth()}`);
console.log(`Dia de la semana ${now.getDay()}`);
console.log(`Dia ${now.getDate()}`);
console.log(date);
console.log(`Hora ${date.getHours()}`);
console.log(`Minutos ${date.getMinutes()}`);
console.log(`Segundos ${date.getSeconds()}`);
console.log(`Milisegundos ${date.getMilliseconds()}`);

//TimeStamp

let timeStamp = 2;
let date2 = new Date(2);
let timeStampNow = new Date().getTime();
let date3 = new Date(timeStampNow);
console.log(date2);
console.log(timeStampNow);
console.log(date3);

//Ejercicio Fechas

/**
 * Ejercicio de comparación de fechas
 * Crear dos objetos Date, uno con una fecha cualquiera y el siguiente
 * con la fecha actual, luego comparar ambos valores,
 * visualizar cual es la fecha menor a la otra.
 */

let fecha = new Date(1564564546485);
let now2 = new Date();

if (fecha.getTime() > now2.getTime()) {
    console.log(`La fecha ingresada ${fecha} es mayor a la actual ${now2}`);
}else{
    console.log(`La fecha actual ${now2} es mayor a la ingresada ${fecha}`);
}