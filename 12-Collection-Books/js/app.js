class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static showBook() {

    }

    static removeBook(id) {

    }

    static addBook(book = Book){
        Data.insertBook(book);
    }

    static viewAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#libro-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }

    static cleanFields() {
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('isbn').value = '';
    }
}

class Data {
    static GetAllBooks() {
        let books;
        let booksBD = localStorage.getItem('books');
        if (booksBD === null) {
            books = [];
        }
        else{
            books = JSON.parse(booksBD);
        }
        return books;
    }

    static insertBook(book = Book) {
        let books = this.GetAllBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBook() {

    }
}

document.querySelector('#libro-form').addEventListener('submit', submitBook);

function submitBook(e) {
    e.preventDefault();
    //Get Form values
    const title = document.getElementById('titulo').value;
    const author = document.getElementById('autor').value;
    const isbn = document.getElementById('isbn').value;
    if (title === '' || author === '' || isbn === '') {
        UI.viewAlert('Por favor ingresar todos los datos', 'danger');
    } else {
        let book = new Book(title, author, isbn);
        UI.addBook(book);
        UI.cleanFields();
    }
}