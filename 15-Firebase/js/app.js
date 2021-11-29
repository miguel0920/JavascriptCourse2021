/**
 * Modal
 */

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
});


/**
 * Firebase
 */

const firebaseConfig = {
    apiKey: "<>",
    authDomain: "<>",
    projectId: "<>",
    storageBucket: "<>",
    messagingSenderId: "<>",
    appId: "<>"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

/**
 * Business
 */

const listHomework = document.getElementById('list-homeworks');
const form = document.getElementById('add-tarea-form');
const btnUpdateTitle = document.getElementById('UpdateTitleBtn');

let idUpdate = null;
let newTitle = '';

const renderHomeworks = (doc) => {
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.setAttribute('homework-id', doc.id);

    let div = document.createElement('div');
    div.innerText = doc.data().titulo;
    //div.id = doc.id;

    let btnDel = document.createElement('a');
    btnDel.className = 'secondary-content';

    let iDel = document.createElement('i');
    iDel.className = 'material-icons';
    iDel.innerText = 'delete';

    let btnUpda = document.createElement('a');
    btnUpda.className = 'secondary-content modal-trigger';
    btnUpda.href = '#modal1';

    let iUpad = document.createElement('i');
    iUpad.className = 'material-icons';
    iUpad.innerText = 'create';

    btnDel.appendChild(iDel);
    btnUpda.appendChild(iUpad);
    div.appendChild(btnDel);
    div.appendChild(btnUpda);
    li.appendChild(div);

    btnUpda.addEventListener('click', e => {
        idUpdate = e.target.parentElement.parentElement.parentElement.getAttribute('homework-id');        
    })

    btnDel.addEventListener('click', (e) => {
        let id = e.target.parentElement.parentElement.parentElement.getAttribute('homework-id');
        db.collection('tareas').doc(id).delete();
    })

    listHomework.append(li);
}

btnUpdateTitle.addEventListener('click', e => {
    newTitle = document.getElementsByName('textTitle')[0].value;
    db.collection('tareas').doc(idUpdate).update({
        titulo: newTitle
    });    
    document.getElementsByName('textTitle')[0].value = '';
});

form.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('tareas').add({
        titulo: form.titulo.value
    });
    form.titulo.value = '';
});

db.collection('tareas').orderBy('titulo').onSnapshot(snapshot => {
    let cambios = snapshot.docChanges();
    cambios.forEach(cambio => {
        if (cambio.type == 'added') {
            console.log(cambio.doc.data());
            renderHomeworks(cambio.doc);
        } else if (cambio.type == 'removed') {
            let li = listHomework.querySelector(`[homework-id=${cambio.doc.id}]`);
            listHomework.removeChild(li);
        } else if (cambio.type == 'modified') {
            let li = listHomework.querySelector(`[homework-id=${cambio.doc.id}]`);
            li.getElementsByTagName('div')[0].firstChild.textContent = newTitle;
        }
    });
});