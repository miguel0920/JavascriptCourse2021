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

function ChangeValue(){
    age = 50;
}
ChangeValue();  
console.log('Edad ' + age);

let age1;
age1 = 25;

function ChangeValue(){
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

function Age(){
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