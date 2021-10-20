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
const cuadradoES5 = function CuadradoES5(num){
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

const personES5 = people.filter(function(person){
    return person.Age < 18
})

console.log(personES5);

const personES6 = people.filter((person) => person.Age >= 18);
console.log(personES6);