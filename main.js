function Book (title,pages,author){
this.title = title,
this.pages = pages,
this.author = author
};
let book1 = new Book('The Outsider', '100', 'Albert Camus');
console.log(book1);


let modal= document.querySelector('modal');
console.log(modal);
let addBook = document.querySelector('button');
console.log(addBook);
addBook.addEventListener('click',createBook);
function createBook(){
   
}
