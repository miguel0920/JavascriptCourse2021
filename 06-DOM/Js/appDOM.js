//querySelector()
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #000000';

var input = document.querySelector('form input');
input.placeholder = 'Item';

var inputSubmit = document.querySelector('input[type="submit"]');
inputSubmit.value = 'Submit';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

//querySelectorAll()

var items = document.querySelectorAll('.list-group-item');
items[2].style.color = 'blue';

var titles = document.querySelectorAll('h2');
console.log(titles)
titles[0].innerText = 'Add Item';

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

var itemList2 = document.querySelector('#items');
itemList2.parentElement.style.backgroundColor = '#fff5f5';

//**** Elementos y nodos Hijos.
var itemList = document.querySelector('#items');
//childNodes
console.log(itemList.childNodes);

//children
console.log(itemList.children);

//firstChild
//firstElementChild
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Javascript';


//lastChild
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Net Core';

//**** Elementos hermanos.
var itemsList2 = document.querySelector('#items');
//previousSibling
console.log(itemsList2.previousSibling);

//previousElementSibling
console.log(itemsList2.previousElementSibling);

//nextSibling
console.log(itemsList2.nextSibling);

//nextElementSibling
console.log(itemsList2.nextElementSibling);

//**** Crear elementos y nodos.

//createElement
var li = document.createElement('li');
li.className = 'list-group-item';

//createTextNode
var text = document.createTextNode('Node JS');
li.appendChild(text);
li.style.color = 'green';

var container = document.querySelector('.list-group');

var item3 = document.querySelector('.list-group-item');

container.insertBefore(li, item3.lastElementChild);

//Event Click

var clicButton = document.getElementById('buttonRename').addEventListener('click', ItemRename);

function ItemRename(){
    var elementItem = document.querySelector('#items');
    elementItem.lastElementChild.style.backgroundColor = 'orange';
}