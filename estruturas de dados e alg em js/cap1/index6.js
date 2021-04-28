function Book(book1, book2, book3){
    this.book1 = book1;
    this.book2 = book2;
    this.book3 = book3;
    
}
Book.prototype.promo = function(){
    console.log('Os três classicos com 20% de desconto')
}

const colecao = new Book('Dom Casmurro', 'pijama listrado', 'Brascubas');
console.log(colecao.book1, colecao.book2, colecao.book3)
