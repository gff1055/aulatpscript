

// status livro
type bookStatus     = "available" | "onLoan" | "maintenance"

// informações de contato
type contactInfo = {
    email   :string,
    phone   :string
}


// Classe livro
class Book{
    title   :string         // titulo
    author  :string         // autor
    status  :bookStatus     // status do livro

    constructor(pTitle: string, pAuthor: string, pStatus:bookStatus){
        this.title = pTitle
        this.author = pAuthor
        this.status = pStatus
    }

    /* muda o status de um livro */
    public changeStatus(pNewStatus: bookStatus){
        this.status = pNewStatus
        return 1;
    }
}


// Classe membro
class Member{
    readonly id:number      // id do membro - apenas leitura
    name:string             // nome do membro
    contact:contactInfo     // informações de contato

    constructor(pId: number, pName:string, pContact:contactInfo){
        this.id = pId
        this.name = pName
        this.contact = pContact
    }

}


// Classe biblioteca
class Library{
    private shelf: Book[]           // prateleira de livros

    constructor(pShelf: Book[]){
        this.shelf = pShelf
    }

    // adiciona um livro à biblioteca
    addBook(pBook:Book){
        this.shelf.push(pBook)
    }

    // lista os livros disponiveis - retorna um array com os livros disponiveis
    listAvailable(){
        const availableBooks: Book[] = []
        
        // adiciona os livros disponiveis em um array proprio
        for(const book of this.shelf){
            if(book.status == "available")
                availableBooks.push(book)
        }

        return availableBooks
    }
}


let library:Library = new Library([]);

let book1:Book
let book2:Book
let book3:Book
let book4:Book
let book5:Book

let availableBooks: Book[];

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

for(const book of availableBooks){
    console.log("Book");
    console.log(book.title);
}
