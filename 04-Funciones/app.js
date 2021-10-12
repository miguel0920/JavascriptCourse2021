/**
 * Función
 */

function Bienvenido(){
    return 'Hola Mundo';
}

var mensaje = Bienvenido();
console.log('Hola Mundo');


/**
 * Función de cuadrado
 * @param {*} numeroUno Entero numero 1
 * @param {*} numeroDos Entero numero 2
 * @returns la multiplicación de los dos valores.
 */
function CuadradoNumero (numeroUno, numeroDos){
    var resultado = numeroUno * numeroDos;
    return resultado;
}

var num1 = 5;
var num2 = 5;
var resultado = CuadradoNumero(num1, num2);
console.log(resultado);

// Función que convierta grados Fahrenheit a Celsius
// 32F = 0C, 68F = 20C
// C = (F - 32) * 5/9

function ConvertirFahrenACelcius(gradoFahren){
    var Celsius = (gradoFahren - 32) * 5/9;
    return Celsius;
}

var temperatura1 = 32;
var result1 = ConvertirFahrenACelcius(temperatura1);
console.log(result1);
var temperatura2 = 68;
var result2 = ConvertirFahrenACelcius(temperatura2);
console.log(result2);

//Calcular la edad de una persona con base en el año de nacimiento.
function CalcularEdad(edad){
    var CurrentYear = new Date().getFullYear();
    var age = CurrentYear - edad;
    return age;
}

var resultAge = CalcularEdad(1995);

console.log(resultAge);

/**
 * Ejercicio 
 * Calcular cuantos años le falta a una persona para que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como parametro a la función su año de nacimiento y su nombre.
 */

function TiempoJubilizacion(year, name){
    var tiempoJubilizacion = 65;
    var result = tiempoJubilizacion - CalcularEdad(year);
    return `El usuario ${name} le falta ${result} años, para jubilarce`;
}
var yearOfBirth = 1995;
var userName = 'Miguel Barahona'
var time =  TiempoJubilizacion(yearOfBirth, userName);
console.log(time);


/**
 * Funciones como expresiones.
 */

var funcionComoExpresion = function(numero){
    console.log('Hola Miguel ' + numero);
}

funcionComoExpresion(10);