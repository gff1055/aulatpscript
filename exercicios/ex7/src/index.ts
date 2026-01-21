
class Book{
    title   :string
    author  :string
    isbn    :string
    
    constructor(pTitle: string, pAuthor: string, pIsbn: string){
        this.title = pTitle,
        this.author = pAuthor,
        this.isbn = pIsbn
    }
}



type SearchFilter = "title"|"author"|"isbn"

function isSearchFilter(pData:string):boolean{
    return(pData=="title")||(pData=="author")||(pData=="isbn")
}



class Library{

    shelf   :Book[]

    constructor(pShelf:Book[]){
        this.shelf = pShelf
    }

    findBook(pIsbn:string):Book
    findBook(pSearchFilter:SearchFilter):Book[]
    findBook(searchTerm:string|SearchFilter):Book|Book[]{
        if(isSearchFilter(searchTerm)){
            console.log("busca por mais de um livro")
            return [];
        }
        else{ 
            console.log("busca por um livro apenas")
            return this.shelf[0];
        }
    }

}

const book1 = new Book("titulo1", "autor1", "isbn1")
const book2 = new Book("titulo2", "autor2", "isbn2")
const book3 = new Book("titulo3", "autor3", "isbn3")
const library = new Library([])

console.log(library.findBook("titulo1"))
console.log(library.findBook("title"))