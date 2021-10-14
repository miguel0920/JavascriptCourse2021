//Evento submit del formulario.
var form = document.getElementById('formAdd').addEventListener('submit', AddItem);

//Evento clic de la lista
var button = document.getElementById('items').addEventListener('click', DeleteItem);

function AddItem(e){
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

function DeleteItem(e){
    let items = document.getElementById('items');
    if (e.target.classList.contains('delete')) {
        if (confirm('¿Seguro desea eliminar el item?')) {
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}