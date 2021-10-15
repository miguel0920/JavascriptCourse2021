//Evento submit del formulario.
var form = document.getElementById('formAdd').addEventListener('submit', AddItem);

//Evento clic eliminar item de la lista
var button = document.getElementById('items').addEventListener('click', DeleteItem);

//Evento keyup buscar en la lista
var listItems = document.getElementById('FilterItems').addEventListener('keyup', SearchItems);

function AddItem(e) {
    e.preventDefault();
    var text = document.getElementById('txtItem').value;
    console.log(text);
    if (text !== '') {
        var items = document.getElementById('items');
        var li = document.createElement('li');
        li.className = 'list-group-item';

        var addText = document.createTextNode(text);
        document.getElementById('txtItem').value = '';

        li.appendChild(addText);
        var btnDeleteItem = document.createElement('button');
        btnDeleteItem.className = 'btn btn-danger btn-sm float-right delete';
        btnDeleteItem.appendChild(document.createTextNode('X'));
        li.appendChild(btnDeleteItem);

        items.appendChild(li);
    }
}

function DeleteItem(e) {
    let items = document.getElementById('items');
    if (e.target.classList.contains('delete')) {
        if (confirm('¿Seguro desea eliminar el item?')) {
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}

function SearchItems(e) {
    var text = e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li');
    Array.from(items).forEach(function (item) {
        var itemText = item.firstChild.textContent;
        if (itemText.toLowerCase().indexOf(text) != -1 ) {
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }        
    });
}