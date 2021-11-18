class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static showBook() {
        let books = Data.GetAllBooks();
        books.forEach((book) => this.addBookList(book));
    }

    static removeBook(e) {
        if (e.classList.contains('delete')) {
            const isbn = e.parentElement.previousElementSibling.textContent;
            Data.deleteBook(isbn);
            e.parentElement.parentElement.remove();
            UI.viewAlert('Libro eliminado correctamente.', 'success');
        }
    }

    static addBookList(book = Book) {
        let bookList = document.getElementById('libro-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        bookList.appendChild(row);
    }

    static addBook(book = Book) {
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
        else {
            books = JSON.parse(booksBD);
        }
        return books;
    }

    static insertBook(book = Book) {
        let books = this.GetAllBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBook(isbn) {
        let listBooks = this.GetAllBooks();
        listBooks.forEach((book, index) => {
            if (book.isbn === isbn) {
                listBooks.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(listBooks));
    }
}

//Controlar carga de la página para agregar visualizar libros
document.addEventListener('DOMContentLoaded', UI.showBook());

// Controlar el evento Submit
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
        UI.addBookList(book);
        UI.cleanFields();
        UI.viewAlert('Libro creado correctamente.', 'success');
    }
}

document.querySelector('#libro-list').addEventListener('click', (e) => UI.removeBook(e.target));