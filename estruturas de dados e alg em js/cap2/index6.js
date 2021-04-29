//herança
class Book {
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn(){
        console.log(this.isbn);
    }
}



class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology
    }
    printTechnology() {
        console.log(this.technology)
    }
}

let jsBook = new ITBook('learning JS', '200', '12331123', 'javaScript');


console.log(jsBook.title);
jsBook.printTechnology();