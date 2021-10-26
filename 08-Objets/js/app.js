//Example => Objet

let book = {
    Title: 'El libro de Javascript',
    Author: 'Alejandro Cardenas',
    Pages: 400,
    Published: 2015
}

console.log(book);
console.log(`El libro llamado '${book.Title}' fue publicado en el año ${book.Published}`);
book.Pages = 600;
console.log(book.Pages);

/**
 * Ejercicio: crear un objeto 'persona' que contenga las siguientes propiedades:
 * Nombre, Edad, Ciudad
 * Cambiar la Edad
 * Mostrar datos de la persona
 **/

//Solution:
let person = {
    Name: 'Kiara',
    Age: 3,
    City: 'Bogotá D.C.'
}
person.Age = 2;
console.log(`La persona llamada ${person.Name} tiene ${person.Age} años y vive en ${person.City}`);

//Using Objets with funtions
let bookA = {
    Title: 'El libro de Javascript',
    Author: 'Alejandro Cardenas',
    Pages: 400,
    Published: 2015
}

let bookB = {
    Title: 'El libro de .Net Core',
    Author: 'Rosio Durcal',
    Pages: 600,
    Published: 2020
}

let BookInformation = (book)=>{
    return {
        resum: `${book.Title} fue creado por ${book.Author}`,
        resumPages: `${book.Title} tiene ${book.Pages} páginas`
    }
};

var resumBookA = BookInformation(bookA);
var resumBookB = BookInformation(bookB);
console.log(resumBookA.resum);
console.log(resumBookA.resumPages);
console.log(resumBookB.resum);
console.log(resumBookB.resumPages);

//Methods and this

let product = {
    Name: 'Milk',
    Price: 1500,
    message: () => console.log(`Product: Milk`),
    changePrice: function(value){
        this.Price = this.Price + value;
    }
}

product.message();
product.changePrice(300);
console.log(product.Price);

//Objet String

let nameUser = '    Dimitri Vegas    ';
let password = '1234@Clave*211';

console.log(`length word: ${nameUser.length}`);
console.log(`lowercase word: ${nameUser.toLowerCase()}`);
console.log(`uppercase word: ${nameUser.toUpperCase()}`);
console.log(`remove word space: ${nameUser.trim()}`);
console.log(`include word: ${password.includes('@')}`);
console.log(`include word: ${password.includes('Claves')}`);
console.log(`include word with length: ${password.includes('Clave', 4)}`);