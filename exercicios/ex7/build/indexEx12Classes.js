// Classe livro
class Book {
    title; // titulo
    author; // autor
    status; // status do livro
    constructor(pTitle, pAuthor, pStatus) {
        this.title = pTitle;
        this.author = pAuthor;
        this.status = pStatus;
    }
    /* muda o status de um livro */
    changeStatus(pNewStatus) {
        this.status = pNewStatus;
        return 1;
    }
}
// Classe membro
class Member {
    id; // id do membro - apenas leitura
    name; // nome do membro
    contact; // informações de contato
    constructor(pId, pName, pContact) {
        this.id = pId;
        this.name = pName;
        this.contact = pContact;
    }
}
// Classe biblioteca
class Library {
    shelf; // prateleira de livros
    constructor(pShelf) {
        this.shelf = pShelf;
    }
    // adiciona um livro à biblioteca
    addBook(pBook) {
        this.shelf.push(pBook);
    }
    // lista os livros disponiveis - retorna um array com os livros disponiveis
    listAvailable() {
        const availableBooks = [];
        // adiciona os livros disponiveis em um array proprio
        for (const book of this.shelf) {
            if (book.status == "available")
                availableBooks.push(book);
        }
        return availableBooks;
    }
}
let library = new Library([]);
let book1;
let book2;
let book3;
let book4;
let book5;
let availableBooks;
book1 = new Book("titulo1", "autor1", "available");
book2 = new Book("titulo2", "autor2", "available");
book3 = new Book("titulo3", "autor3", "available");
book4 = new Book("titulo4", "autor2", "available");
book5 = new Book("titulo5", "autor1", "available");
library.addBook(book1);
book1.changeStatus("onLoan");
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
availableBooks = library.listAvailable();
for (const book of availableBooks) {
    console.log("Book");
    console.log(book.title);
}
export {};
