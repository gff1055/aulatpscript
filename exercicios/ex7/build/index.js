class Book {
    title;
    author;
    status;
    constructor(pTitle, pAuthor, pStatus) {
        this.title = pTitle;
        this.author = pAuthor;
        this.status = pStatus;
    }
    changeStatus(pNewStatus) {
        this.status = pNewStatus;
        return 1;
    }
}
class Member {
    id;
    name;
    contact;
    constructor(pId, pName, pContact) {
        this.id = pId;
        this.name = pName;
        this.contact = pContact;
    }
}
/*let book1 = new Book("O ptk", "Desk Top", "available");

if(book1.changeStatus("onLoan")){
    console.log("o status do livro foi atualizado")
};*/
class Library {
    shelf;
    constructor(pShelf) {
        this.shelf = pShelf;
    }
    addBook(pBook) {
        this.shelf.push(pBook);
    }
    listAvailable() {
        const availableBooks = [];
        for (const book of this.shelf) {
            if (book.status == "available")
                availableBooks.push(book);
        }
        return availableBooks;
    }
}
let library;
let book1;
let book2;
let book3;
let book4;
let book5;
let availableBooks;
library = new Library([]);
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
