/**
 * Sentencia If / else
 */

var nombre = 'pablo';
var estadoCivil = 'soltero';

if (estadoCivil === 'casado') {
    console.log(`${nombre} esta casado`);
} else {
    console.log(`${nombre} esta soltero`);
}


/**
 * Sentencia condicional
 */

var nombre = 'Miguel';
var edad = 61;

//edad < 12 es un niño
//edad > 11, es < 18, es un adolecente
//edad > 17, es < 60, es un adulto
//edad > 60, es un anciano

if (edad < 12) {
    console.log(`${nombre} es un niño`);
} else if (edad > 11 && edad < 18) {
    console.log(`${nombre} es un adolecente`);
} else if (edad > 17 && edad < 60) {
    console.log(`${nombre} es un adulto`);
}
else {
    console.log(`${nombre} es un anciano`);
}

/**
 * Operador Ternario
 */

var nombre = 'Angel';
var age = 16;

age >= 18 ? console.log(`${nombre} es mayor de edad`) : console.log(`${nombre} es menor de edad`);

/**
 * Sentencia Swith
 */

var month = 5;

switch (month) {
    case 1:
        console.log(`Mes de Enero`);
        break;
    case 2:
        console.log(`Mes de Febrero`);
        break;
    case 3:
        console.log(`Mes de Marzo`);
        break;
    case 4:
        console.log(`Mes de Abril`);
        break;
    default:
        console.log(`no es posible encontrar el mes`);
        break;
}

/**
 * Sentencia For
 */
var numeros = [1, 2, 4, 5, 5, 6, 5, 4];
for (let index = 0; index < numeros.length; index++) {
    console.log(`For: ${numeros[index]}`);
}

/**
 * Sentencia While
 */
var contador = 0;
while (contador <= 10) {
    console.log(`while: ${contador}`);
    contador++;
}

/**
 * Sentencia Do While
 */
var i = 1;
do {
    console.log(`Do While: ${i}`);
    i++;
} while (i <= 5)


/**
 * Ejercicio 1
 * Notas de pablo: 14, 8, 16
 * Notas de Maria: 12, 18, 10
 * 
 * Calcular el promedio de cada alumno, además indicar quien tiene el promedio 
 * superior, e indicar si el alumno esta aprobado, para ello su promedio debe 
 * ser superior a 13.
 */

var promedioPablo = (14 + 8 + 16) / 3;
var promedioMaria = (12 + 18 + 10) / 3;

console.log(`Pablo tiene el promedio de, ${promedioPablo}`);
console.log(`Maria tiene el promedio de, ${promedioMaria}`);

if (promedioPablo > promedioMaria) {
    console.log(`Pablo tiene el promedio superior con, ${promedioPablo}`);
} else if (promedioMaria > promedioPablo) {
    console.log(`Maria tiene el promedio superior con, ${promedioMaria}`);
} else {
    console.log(`Los dos tienen promedios iguales Pablo ${promedioPablo} y Maria ${promedioMaria}`);
}

if (promedioPablo > 13) {
    console.log(`Pablo aprobo con ${promedioPablo}`);
}

if (promedioMaria > 13) {
    console.log(`Maria aprobo con ${promedioMaria}`);
}