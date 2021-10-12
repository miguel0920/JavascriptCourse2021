/*************************************
 * Lección de asignación de variables.
**************************************/


/*console.log('Hola mundo !!');

var nombre = 'Miguel';

console.log(nombre);

var edad = 25;
console.log(edad);

var tieneTrabajo = true;
console.log(tieneTrabajo);

var puestoTrabajo;
console.log(puestoTrabajo);

tieneTrabajo = null;
console.log(tieneTrabajo);*/

/*********************
* Conversión de tipos
**********************/

/*var nombre, edad, genero;

nombre = 'Miguel';
edad = 25;
genero = 'M'

console.log(`Nombre: ${nombre}, su edad es: ${edad} y su genero es: ${genero}`)*/

/*********************************
* Operadores Urinarios Aritméticos
**********************************/

/*var edadMiguel = 25;
var edadSteven = 25;

console.log(edadMiguel++);
console.log(edadMiguel);

console.log(++edadSteven);
console.log(edadSteven);*/

/*********************************
* Ejercicio.
**********************************/
//SOLUCIÓN
var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75

var iMCLuis = pesoLuis / (alturaLuis**2);
console.log('imc Luis ' + iMCLuis);
var iMCCarlos = pesoCarlos / (alturaCarlos**2);
console.log('imc Carlos ' + iMCCarlos);
var esCarlosMayor = iMCCarlos > iMCLuis;
console.log('¿ El IMS de Carlos es superior al de Luis ? ' + esCarlosMayor);