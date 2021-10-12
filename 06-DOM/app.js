//querySelector()
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #000000';

var input = document.querySelector('input');
input.placeholder = 'Miguel';

var inputSubmit = document.querySelector('input[type="submit"]');
inputSubmit.value = 'Enviar';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

//querySelectorAll()

var items = document.querySelectorAll('.list-group-item');
items[2].style.color = 'blue';

var titles = document.querySelectorAll('h2');
console.log(titles)
titles[0].innerText = 'Bienvenido';

var itemsOdd = document.querySelectorAll('li:nth-child(odd)');
var itemsEven = document.querySelectorAll('li:nth-child(even)');
for (let index = 0; index < itemsOdd.length; index++) {
    itemsOdd[index].style.backgroundColor = '#ccc';
    itemsEven[index].style.backgroundColor = '#f4f4f4';
}

//parentNode

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#fff5f5';

//parentElement

var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#fff5f5';