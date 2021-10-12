/**
 * Arreglos en JavaScript
 */

var nombres = ["Miguel", "Tatiana", "Kiara"];
var vegetales = new Array("Tomate", "Lechuga", "Cebolla");

console.log(nombres[0]);
console.log(nombres[1]);
console.log(vegetales[1]);


nombres[0] = 'Claudia';
console.log(nombres[0]);

console.log(nombres.length);

var nombre = "Miguel Angel";
console.log(nombre);
var apellidos = 'Naranjo Garcia';
console.log(apellidos);

var apellido = 'Barahona';
console.log(apellido);

/**
 * Operaciones en arreglos
 */

var frutas = ['Pera', 'Manzana', 'Uva'];

for (let index = 0; index <= frutas.length - 1; index++) {
    console.log(frutas[index]);
}

frutas.forEach(function (elemento, index, array) {
    console.log(elemento, index, array);
});
// Agregar al último
frutas.push('Naranja');
console.log(frutas);

// Agregar al principio
frutas.unshift('Fresa');
console.log(frutas);

// Eliminar el último
frutas.pop();
console.log(frutas);

// Eliminar el primero
frutas.shift();
console.log(frutas);

// Buscar la poseción de un elemento del arreglo
var pos = frutas.indexOf('Uva');
console.log(pos);

// Eliminar en una posición
frutas.splice(1, 1);
console.log(frutas);

/**
 * Arreglos de diferente tipos
 */

var Celulares = new Array('Samsung', 'Xiaomy', 15989);
console.log(Celulares);

/**
 * Objetos Literales
 */

var Persona = {
    Nombre: 'Miguel Angel',
    Edad: 26,
    Hobbies: ['Futboll', 'Películas', 'Estudiar'],
    Trabajo: 'Desarrollador de software',
    esCasado: false
};

console.log(Persona);

console.log(Persona.Nombre);
console.log(Persona['Edad']);

Persona.esCasado = true;
console.log(Persona.esCasado);


/**
 * Objetos con la sintaxis Object
 */

var Persona2 = new Object();
Persona2.Nombre = 'Claudia';
Persona2.Apellidos = 'Ordoñez';
Persona2['Edad'] = 46;
console.log(Persona2);

/**
 * Objeto con método
 */

var Persona3 = {
    Nombre: 'Miguel Angel',
    Edad: 26,
    Hobbies: ['Futboll', 'Películas', 'Estudiar'],
    Trabajo: 'Desarrollador de software',
    esCasado: false,
    CalcularAnioDeNacimiento: function () {
        this.AnioNacimiento = new Date().getFullYear() - this.Edad;
    }
};
Persona3.CalcularAnioDeNacimiento();
console.log(Persona3);