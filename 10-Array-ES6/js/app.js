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