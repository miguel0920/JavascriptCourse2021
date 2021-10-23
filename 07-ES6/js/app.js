//Example ES5 and ES6

// Variables con let y const

//ES5
var nameES5 = 'Pepe'
console.log('ES5 ' + nameES5);

nameES5 = 'Anna';
console.log('ES5 ' + nameES5);

//ES6
let nameES6 = 'Michael';
console.log(nameES6);
nameES6 = 'Pedro';
console.log(nameES6);

const dateOfBirthES6 = 1997;
console.log(dateOfBirthES6);
// dateOfBirthES6 = 1990;
// console.log(dateOfBirthES6);

//Bloque y alcance de las variables

let age;
age = 19;

function ChangeValue() {
    age = 50;
}
ChangeValue();
console.log('Edad ' + age);

let age1;
age1 = 25;

function ChangeValue() {
    let age1;
    age1 = 50;
}
ChangeValue();
console.log('Edad ' + age1);

{
    let firstName = 'Steven'; //ES6
    const lastName = 'Rodriguez'; //ES6
    var work = 'Software Developer'; //ES5
}
//console.log(firstName + lastName);
console.log(work);

//Plantilla de cadenas avanzada

let firstNameES6 = 'Carlos';
let lastNameES6 = 'Cardenas';
const dateOfBirth = 1990;

function Age() {
    return new Date().getFullYear() - dateOfBirth;
}

console.log('Su nombre es' + ' ' + firstNameES6 + ' ' + lastNameES6 + ' ' + 'su edad es' + ' ' + Age());
console.log(`Su nombre es ${firstNameES6} ${lastNameES6} su edad es ${Age()}`);

//Nuevos métodos para cadenas
console.log(firstNameES6.repeat(5));
console.log(`${firstNameES6} `.repeat(5));

console.log(firstNameES6.includes('Car'));
console.log(firstNameES6.includes('Cas'));

console.log(firstNameES6.startsWith('Ca'));
console.log(firstNameES6.endsWith('os'));

// Funciones de flecha

let years = [2000, 2004, 2009, 2013];

//ES5
var ageES5 = years.map(function (year) {
    return new Date().getFullYear() - year;
});
console.log(ageES5);

//ES6
var ageES6 = years.map(year => new Date().getFullYear() - year);
console.log(ageES6);

let ageES6Example1 = years.map((year, index) => `La edad del usuario ${index + 1} es de ${new Date().getFullYear() - year}`);

console.log(ageES6Example1);

let ageES6Example2 = years.map((year, index) => {
    let age = new Date().getFullYear() - year;
    return `La edad del usuario ${index + 1} es de ${age}`;
});

console.log(ageES6Example2);

//Example 2 => Flecha


//ES5
const cuadradoES5 = function CuadradoES5(num) {
    return num * num;
}

console.log(cuadradoES5(5));

//ES6
const cuadradoES6Example1 = (num) => num * num;
console.log(cuadradoES6Example1(3));

const cuadradoES6Example2 = (num) => {
    return num * num;
};
console.log(cuadradoES6Example2(6));

const people = [
    {
        Name: 'Carlos',
        Age: 26
    },
    {
        Name: 'Camilo',
        Age: 15
    },
    {
        Name: 'Alexander',
        Age: 17
    },
    {
        Name: 'Alejandra',
        Age: 18
    }
]

const personES5 = people.filter(function (person) {
    return person.Age < 18
})

console.log(personES5);

const personES6 = people.filter((person) => person.Age >= 18);
console.log(personES6);


//Destructuración

//ES5
var productsES5 = ['Manzana', 1000];
console.log(productsES5[0]);
console.log(productsES5[1]);

//ES6
var [productES6, priceES6] = ['Pera', 2000];
console.log(productES6);
console.log(priceES6);

var colors = {
    Color: 'white',
    Property: '#fff'
}

var { Color: c, Property: p } = colors;
console.log(c);
console.log(p);

//Example destructuring

var PersonOfLegalAge = (year) => {
    let age = new Date().getFullYear() - year;
    let isOlder = age >= 18;
    return [age, isOlder];
};

var [agePerson, isOlder] = PersonOfLegalAge(2010);
console.log(agePerson);
console.log(`The person is older ${isOlder}`);


//ES6 => Map

let data = new Map();
data.set('Nombre', 'Pedro');
data.set('Apellido', 'Cardenas');
data.set(1, 3135115478);

let nombrePerson = data.get('Nombre');
console.log(nombrePerson);

//data.delete(1);
//data.clear();

data.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});

//Spread Operator.

let sum = (a, b, c, d) => a + b + c + d;

let result = sum(10, 20, 30, 40);
console.log(result);

let values = [10, 20, 30, 40];
console.log(sum(...values));

let Doctors = ['Angel', 'Pablo', 'Ricardo'];
let Engineers = ['Miguel', 'Eduar', 'Mario'];
let company = [...Doctors, ...Engineers];
console.log(company);