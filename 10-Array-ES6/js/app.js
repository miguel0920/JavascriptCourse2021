//Array - ES6

const ingredients = ['Cebolla', 'Tomate', 'Pescado'];

//Delete an item at the end
console.log(ingredients.pop());
console.log(`pop() => ${ingredients}`);

//Add an element to the end
console.log(ingredients.push('Platano'));
console.log(`push() => ${ingredients}`);

//Delete an item at startup
console.log(ingredients.shift());
console.log(`shift() => ${ingredients}`);

//Add an element to the start
console.log(ingredients.unshift('Aguacate'));
console.log(`unshift() => ${ingredients}`);

//Delete an element anywhere in the array
ingredients.splice(1, 1);
console.log(`delete split() => ${ingredients}`);

//Add an element anywhere in the array
ingredients.splice(1, 0, 'Carne');
console.log(`add split() => ${ingredients}`);

//loop over arrays

ingredients.forEach((value, index) => {
    console.log(`Index: ${index}, valor: ${value}`);
});

//find an element of a simple array
const projects = ['Meta', 'Coffe', 'Instagram'];

let project = projects.indexOf('Instagram');
let project1 = projects.indexOf('instagram');
console.log(`correct search: ${project}`);
console.log(`wrong search: ${project1}`);

//find an element in an array of complex shape
const eats = [
    {
        code: 100,
        name: 'Papas fritas'
    },
    {
        code: 200,
        name: 'Pollo'
    },
    {
        code: 300,
        name: 'Mani'
    }
];

let eatBAD = eats.findIndex((value) => {
    return value.name === 'papas';
});

let eatOK = eats.findIndex((value) => {
    return value.name === 'Mani';
});

console.log(`correct search: ${eatBAD}`);
console.log(`wrong search: ${eatOK}`);

//search for an object with a function.

const eatsExample = [
    {
        code: 100,
        name: 'Papas fritas'
    },
    {
        code: 200,
        name: 'Pollo'
    },
    {
        code: 300,
        name: 'Mani'
    }
];

const searchEat = (eats, name) => {
    let index = eats.findIndex((value) => {
        return value.name === name;
    });
    return eats[index] ?? null;
};

console.log(`correct search => ${searchEat(eatsExample, 'Manis')}`);
console.log(searchEat(eatsExample, 'Pollo'));


//search by word in a basic object

const apps = ['Facebook', 'Teams', 'Whatsapp', 'Merqueo'];
console.log(apps.filter((value) => {
    return value.includes('e');
}));

//search by word in an advanced object

const searchEatExample = eatsExample.filter((value) => {
    let eat = value.name.includes('a');
    return eat;
})

console.log(searchEatExample);