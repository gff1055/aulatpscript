class Book {
    title;
    author;
    isbn;
    constructor(pTitle, pAuthor, pIsbn) {
        this.title = pTitle,
            this.author = pAuthor,
            this.isbn = pIsbn;
    }
}
function isSearchFilter(pData) {
    return (pData == "title") || (pData == "author") || (pData == "isbn");
}
class Library {
    shelf;
    constructor(pShelf) {
        this.shelf = pShelf;
    }
    findBook(searchTerm) {
        if (isSearchFilter(searchTerm)) {
            console.log("busca por mais de um livro");
            return [];
        }
        else {
            console.log("busca por um livro apenas");
            return this.shelf[0];
        }
    }
}
const book1 = new Book("titulo1", "autor1", "isbn1");
const book2 = new Book("titulo2", "autor2", "isbn2");
const book3 = new Book("titulo3", "autor3", "isbn3");
const library = new Library([]);
console.log(library.findBook("titulo1"));
console.log(library.findBook("title"));
export {};
